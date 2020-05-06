import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash'

export const fetchPosts = () => async dispatch => {

    const response = await jsonPlaceholder.get('/posts');

    dispatch ({
        type: 'FETCH_POST',
        payload: response.data
    });
};

// export const fetchUser = id => async dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch ({ type: 'FETCH_USER', payload: response.data });
// };


export const fetchUser = id => dispatch => _fetchUser(id,dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch ({ type: 'FETCH_USER', payload: response.data });
    
}) 
// _fetchUser is a private function



// import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts =  () => {
//     return function (dispatch, getState) {

//     }
//     const promise =  jsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POST',
//         payload: promise
//     };
// };






// import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = async () => {
//     // bad approch
//     // beacuse this is not plain javascript
//     // async and await is the reason, this is not plain javascript
//     const response = await jsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POST',
//         payload: response
//     };
// };






// export const fetchPosts =  () => {
//     return { 
//         type: 'FETCH_POST',
//     };
// };