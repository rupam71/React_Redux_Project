
// export const signIn = () =>{
//     return {
//         type:'SIGN_IN'
//     }
// }

import streams from "../apis/stream";
import history from './../history';

export const signIn = (userId) =>({
        type:'SIGN_IN',
        payload : userId
})

export const signOut = () =>({
        type:'SIGN_OUT'
})

export const createStream = formValues => async (dispatch, getState) => {
       // getState get all state together, we make in this application
       // here this action actully work with stream state,
       // but now we will connect a different state
       // we will connect auth states userId Property
       const {userId} = getState().auth;
       const response = await streams.post(
        '/streams', 
        { ...formValues, userId }
        // w=now with previos state, anew property add from different state
        // PEACE :)
       );

       dispatch({
               type : 'CREATE_STREAM',
               payload : response.data
       })
       history.push('/');
       // this history is custom history what we 
       // made at react router dom
       // EveryTime after createStream request complete,
       // we will navigate to push('/') address.....
};

export const fetchStreams = () => async dispatch => {
        const response = await streams.get('/streams');
 
        dispatch({
                type : 'FETCH_STREAMS',
                payload : response.data
        })
 };

 export const fetchStream = (id) => async dispatch => {
        const response = await streams.get(`/streams/${id}`);
 
        dispatch({
                type : 'FETCH_STREAM',
                payload : response.data
        })
 };

 export const editStream = (id, formValues) => async dispatch => {
        const response = await streams.patch(`/streams/${id}`, formValues);
 
        dispatch({
                type : 'EDIT_STREAM',
                payload : response.data
        })

        history.push('/');
 };

 // its safe to use patch than put
 // patch only change what property of an objcet we want to change
 //put replace with whole object

 export const deleteStream = (id) => async dispatch => {
        await streams.delete(`/streams/${id}`);
 
        dispatch({
                type : 'DELETE_STREAM',
                payload : id
        })

         history.push('/');
 };
