import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledGifs } from '../../styles/StyledGifs';
import * as actions from '../../state/actionCreators';
import Gif from './Gif';
import Spinner from '../helper_components/Spinner';
import Search from '../Search';
import { API_KEY, API_URL, RATING, TRENDING, SEARCH_BASE_URL} from '../../config/appConfig';

export function Gifs(props) {
    const { loading, error } = props.gifs;
    console.log(props);
    const { data } = props.gifs;
    const { getGifs } = props;

    const [inputState, setInputState] = useState('');

    function onInputChange (event) {
        console.log(event.target.value);
        setInputState(event.target.value);
    }

    function searchOnSubmit(event, search) {
        event.preventDefault();
        
        const endpoint = search ? `${SEARCH_BASE_URL}search` : `${API_URL}${TRENDING}${API_KEY}${RATING}`;
        
        setInputState(search);
        
        getGifs(endpoint);
    }

    useEffect(() => {
        getGifs(inputState);
    }, [getGifs]);

    if(error) return <div>Something went wrong..</div>
    if(!data[0]) return <Spinner />

    return (
        <StyledGifs>
           <form>
               <div className="form-div">
                    <input type="text" onChange={onInputChange}/>
                    <button>Search</button>
               </div>
           </form>

            <ul>
                {data.map((gif) => (
                    <Link to={`/${gif.id}`}>
                        <Gif 
                            key={gif.id} 
                            gif={gif}
                        />
                    </Link>
                ))}
            </ul>
            {loading && <Spinner />}
            {/* <LoadMore text="Load More" callback={loadMoreGifs} /> */}
        </StyledGifs>
    )
}


const mapStoreToProps = state => {
    return {
        gifs: state.gifs
    }
};

export default connect(mapStoreToProps, actions)(Gifs)