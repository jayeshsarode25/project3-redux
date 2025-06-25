import axios from "../../api/Axiosconfig";
import { loaduser, removeuser } from "../reducers/userSlice";

export const asynclogincurrentuser = () => async (dispatch , getstate) =>  {
    try {
       const user = JSON.parse(localStorage.getItem("user"));
       if(user) dispatch(loaduser(user));
        else console.log("user not logged in !")
    } catch (error) {
        console.log(error);
    }
}

export const asynclogoutuser = () => async (dispatch , getstate) =>  {
    try {
        localStorage.removeItem("user");
        dispatch(removeuser());
        console.log("user logged out !")
    } catch (error) {
        console.log(error);
    }
}

export const asyncloginuser = (user) => async (dispatch , getstate) =>  {
    try {
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        console.log(data[0]);
        localStorage.setItem("user" , JSON.stringify(data[0]))
        dispatch(asynclogincurrentuser());
    } catch (error) {
        console.log(error);
    }
}


export const asyncregisteruser = (user) => async (dispatch,getstate) =>{
    try {
        const res = await axios.post("/users", user);
        console.log(res)
    //    dispatch(loaduser(res.data));
    } catch (error) {
        console.log(error);
    }
}

export const asyncupdateuser = ( id,user) => async (dispatch,getstate) =>{
    try {
        const {data} = await axios.patch("/users/" + id, user);
        localStorage.setItem("user" , JSON.stringify(data))
        dispatch(asynclogincurrentuser());
    } catch (error) {
        console.log(error);
    }
}

export const asyncdeleteuser = (id) => async (dispatch ,getstate) =>{
    try {
        await axios.delete("/users/"+ id );
        dispatch(asynclogoutuser())
    } catch (error) {
        console.log(error)
    }
}