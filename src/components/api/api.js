import axios from "axios";

// export default axios.create({
//     baseURL:'https://mapmarkaz.herokuapp.com/'    
// })

function doGet(url){
    return axios('http://backend.mapmarkaz.uz/'+url)
}
export default doGet;