import axios from "../../api/Axiosconfig";

export const asynclogincurrentuser = () => async (dispatch , getstate) =>  {
    try {
       const user = JSON.parse(localStorage.getItem("user"));
       if(user) dispatch(loaduser(user))
        else console.log("user not logged in !")
    } catch (error) {
        console.log(error);
    }
}

export const asynclogoutuser = () => async (dispatch , getstate) =>  {
    try {
        localStorage.removeItem("user");
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