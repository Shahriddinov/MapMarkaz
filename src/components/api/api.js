import axios from "axios";

// export default axios.create({
//     baseURL:'https://mapmarkaz.herokuapp.com/'    
// })

function doGet(url){
    return axios.get('https://mapmarkaz.herokuapp.com/'+url)
}
export default doGet;