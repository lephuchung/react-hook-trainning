import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (data_url, isCovidData) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    // const ourRequest = axios.CancelToken.source();

    const fetchData = async (url) => {

        let data = '';

        let res = await axios.get(url
            // ,{cancelToken: ourRequest.token,}
        );
        isCovidData ?
            (data = res && res.data && res.data.data ? res.data.data : [])
            :
            (data = res && res.data ? res.data : [])
        // if (isCovidData) {
        //     data = res && res.data && res.data.data ? res.data.data : [];
        // }
        // else data = res && res.data ? res.data : [];
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
            // fetchData(data_url);
        }
        catch (error) {
            console.log('hahah');
            setIsError(true);
            setIsLoading(false);
        }
        // return () => {
        //     ourRequest.cancel()
        // }

    }, [data_url]);
    // console.log('check err: ', isError);
    return {
        data, isLoading, isError

    }
}

export default useFetch;