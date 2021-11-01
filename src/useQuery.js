import { useState, useEffect } from 'react';

const useQuery = (request) => {
    const [res, setRes] = useState({});

    const fetchData = async () => {
        const res = await request;
        const data = await res.json();
        setRes(data);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return { res };
}

export default useQuery;
