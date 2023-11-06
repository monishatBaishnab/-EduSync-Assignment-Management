import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useFetchAssignments = (asignemntUrl) => {
    const [assingments, setAssignments] = useState({});
    const axios = useAxios();
    const url = asignemntUrl;
    useEffect(() => {
        axios.get(url)
        .then(res => setAssignments(res.data));
    }, [axios, url])

    return assingments;

};

export default useFetchAssignments;