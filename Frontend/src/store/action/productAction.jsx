
import axios from "../../api/Axiosconfig";
import { loadproduct } from "../reducers/productSlice";

export const asyncloadproduct = () => async (dispatch , getstate) =>{
    try {
      const { data } = await axios.get("/products");
        dispatch(loadproduct(data))
    } catch (error) {
        console.log(error)
    }
}

export const asynccreateproduct = (product) => async (dispatch ,getstate) =>{
    try {
        await axios.post("/products" ,product);
        dispatch(asyncloadproduct())
    } catch (error) {
        console.log(error)
    }
}

export const asyncupdateproduct = (id, product) => async (dispatch ,getstate) =>{
    try {
        await axios.patch("/products/"+ id ,product);
        dispatch(asyncloadproduct())
    } catch (error) {
        console.log(error)
    }
}

export const asyncdeleteproduct = (id) => async (dispatch ,getstate) =>{
    try {
        await axios.delete("/products/"+ id );
        dispatch(asyncloadproduct())
    } catch (error) {
        console.log(error)
    }
}