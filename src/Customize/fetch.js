import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (data_url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = async (url) => {

        let res = await axios.get(url);
        let data = res && res.data && res.data.data ? res.data.data : [];
        // console.log(data);
        setData(data);
        setIsLoading(false);
        setIsError(false);
    }

    useEffect(() => {
        try {
            setTimeout(() => {
                fetchData(data_url);
                // console.log('check data: ', data);
            }, 500)
        }
        catch (e) {
            setIsError(true);
            setIsLoading(false);
        }


    }, [data_url]);

    return {
        data, isLoading, isError
    }
}

export default useFetch;