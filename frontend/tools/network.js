import axios from "axios";
//import { SERVER_URL} from "./config";
console.log("backend url: " + process.env.SERVER_URL);
const instance = axios.create({baseURL: process.env.SERVER_URL});

export const getCollections = async (addr) => {
    return await instance.get(`/ticket/${addr}`).then(res=>{
        return res.data
    });
};