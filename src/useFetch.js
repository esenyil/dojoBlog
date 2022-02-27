import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, SetIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                SetIsPending(false);
                setError(null);
            })
            .catch(error =>{
                if(error.name === 'AbortError'){
                    console.log('fetch abortet')
                } else {
                    setError(error.message);
                    SetIsPending(false); 
                }
            });
        }, 3000);

        return () => abortCont.abort()
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;