import Axios from "axios"

export const method = {
    GET: "get"
}

export const getNews = () => {
    return async(dispatch)=>{
        try {
            const res = await Axios.get("https://cors-anywhere.herokuapp.com/http://today.line.me/id/portaljson")
            dispatch({type: method.GET, payload: res.data.result})
        } catch (error) {
            console.log(error)
        }
    }
}
