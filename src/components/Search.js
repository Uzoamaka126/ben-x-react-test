// import React, { useState, useEffect } from 'react';

// export function Search(props) {
//     const [inputState, setInputState] = useState('');

//     function onInputChange (event) {
//         setInputState(event.target.value);
//     }

//         function searchOnSubmit(event) {
//             event.preventDefault();

//         }   
   

//     return (
//         <div>
//             <form onSubmit={searchOnSubmit}>
//                 <input name="search" onChange={onInputChange} />
//                 <button>Search</button>
//             </form>
//         </div>
//     )
// }

// const mapStoreToProps = state => {
//     return {
//         gifs: state.gifs
//     }
// };

// export default connect(mapStoreToProps, actions)(Gifs)