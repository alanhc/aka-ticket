import axios from "axios";
//import { SERVER_URL} from "./config";
console.log("backend url: " + process.env.SERVER_URL);
const instance = axios.create({ baseURL: process.env.SERVER_URL });

export const getCollections = async (addr) => {
    return await instance.get(`/ticket/${addr}`).then(res => {
        return res.data
    });
};

export const getActivateTicket = async (address, contract, ticketid, cnt, signature) => {
    //ticketid=1
    var data = JSON.stringify({
        "signature": `${signature}`,
        "message": "12345678"
    });
    var config = {
        method: 'post',
        url: `${process.env.SERVER_URL}/activate/${address}/${contract}/${ticketid}/${cnt}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return await axios(config).then(res =>{
        console.log("---success",res);
        return res
    }).catch((err)=>{
        console.log("---err",err.response.status, err.response, {address, contract, ticketid, cnt, signature})
        return err.response
        
    })
};

export const verifyTicket = async (otp, address, contract, ticketid) => {
    //ticketid=1
    var data = JSON.stringify({
        "otp": otp,
        "address": address
    });
    var config = {
        method: 'post',
        url: `${process.env.SERVER_URL}/verify/${contract}/${ticketid}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return await axios(config).then(res =>{
        console.log("---success",res);
        return res
    }).catch((err)=>{
        console.log("---err",err.response.status, err.response)
        return err.response
        
    })
};