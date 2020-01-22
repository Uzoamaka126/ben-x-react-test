// import * as types from '../actionTypes';

// const initialState = {
//     loading: false,
//     error: false,
//     searchInput: ''
// };

// export function appReducer (state = initialState, action) {
//     switch (action.type) {
//         case types.SEARCH_GIFS:
//             return {
//                 ...state,
//                 loading: true
//             }
//         case types.SEARCH_GIFS_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 data: action.payload
//             }
//         case types.SEARCH_GIFS_FAILURE:
//             return {
//                 ...state,
//                 error: true
//             }
//         default: 
//             return state;
//     }
// }