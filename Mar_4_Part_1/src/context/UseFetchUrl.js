import { useEffect, useState } from "react"

const UseFetchUrl = (url) => {
    const[data,setUrlData] = useState([])

    useEffect(() => {
        fetch(url).then( (res) => res.json())
        .then((data) => setUrlData(data));
    },[url])
    return [data];
}
export default UseFetchUrl;