import axios from "axios";
import { useEffect, useState } from "react";


export const axiosBase = axios.create({
    baseURL: 'http://localhost:5000',
    // baseURL: 'vercel link',
})

const useAxios = (url) => {
    const [fetch, setFetch] = useState([])

    useEffect(() => {
        axiosBase.get(url)
            .then(res => {
                setFetch(res.data)
            })
    }, [url])

    return fetch;
};

export default useAxios;