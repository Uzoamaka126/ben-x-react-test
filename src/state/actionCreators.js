import * as types from './actionTypes.js';
import axios from 'axios';
import { API_KEY, API_URL, RATING, TRENDING, SEARCH_BASE_URL} from '../config/appConfig';

// axios.defaults.baseURL = 'https://api.giphy.com/v1/gifs/trending?YUshCAt4n1fpXj2eLodkYd5zGvH0ATex&rating=G'

export const getGifs = (searchTerm) => dispatch =>  {
    const searchEndpoint = `${API_URL}search?${API_KEY}&q=${searchTerm}`;
    const trendingEndpoint = `${API_URL}${TRENDING}${API_KEY}${RATING}`;

    if (searchTerm) {
        axios.get(`${searchEndpoint}`)
        .then(res => {
            console.log(searchTerm, searchEndpoint);

            console.log(res.data);
            dispatch({
                type: types.FETCH_GIFS_SUCCESS,
                payload: res.data.data
            })
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: types.FETCH_GIFS_FAILURE,
            })
        })
    } else {
        
        axios.get(`${trendingEndpoint}`)
        .then(res => {
            console.log(res.data);
            console.log(trendingEndpoint)

            dispatch({
                type: types.FETCH_GIFS_SUCCESS,
                payload: res.data.data
            })
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: types.FETCH_GIFS_FAILURE,
            })
        })
    }
}