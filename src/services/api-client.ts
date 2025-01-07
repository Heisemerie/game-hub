import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: "48fdf29be8524f61a554b8f1e2dba39d"
    }
})