import axios from "axios";

class RestHandler {
    async get(path) {
        try {
            const getCall = await axios.get(path);
            return getCall;
        }
        catch(e) {
            console.log(e);
        }
    }
    async post(path,data) {
        try {
            const postCall = axios.post(path,data);
            return postCall;
        }
        catch(e) {
            console.log(e);
        }
    }
    async put(path,data) {
        try {
            const putCall = axios.put(path,data);
            return putCall;
        }
        catch(e) {
            console.log(e);
        }
    }
}

const restHandlerObject = new RestHandler();

export default restHandlerObject;