import { useEffect, useState, useCallback } from 'react';
import { API_KEY, API_URL, RATING, } from '../config/appConfig';
export function useGifFetch() {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(false);

        try {
            const endpoint = `${API_URL}${API_KEY}${RATING}`;
            const result = await (await fetch(endpoint)).json();
            
            console.log(result);
            setState(result);

        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return [state, loading, error];
}