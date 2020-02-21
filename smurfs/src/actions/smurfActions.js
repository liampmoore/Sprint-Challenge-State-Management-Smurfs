import axios from 'axios';


export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const ADD_SMURF_START = 'ADD_SMURFS_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURFS_FAILURE'


export function getSmurfs() {
    return (dispatch) => {
        console.log('Getting list of smurfs.')
        console.log('Dispatching: FETCH_SMURFS_START')
        dispatch({
            type: FETCH_SMURFS_START
        })
        axios.get('http://localhost:3333/smurfs')
            .then((res) => {
                console.log('Fetch Success.')
                console.log('Response:', res)
                console.log('Dispatching: FETCH_SMURF_SUCCESS')

                dispatch({
                    type: FETCH_SMURFS_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log('Fetch Failure.')
                console.log(' Error response:', err)
                console.log('Dispatching: FETCH_SMURF_FAILURE')

                dispatch({
                    type: FETCH_SMURFS_FAILURE
                })
            })


    }
}


export function addSmurf(smurf) {
    return (dispatch) => {
        console.log('Adding a new smurf...')
        console.log('Smurf to add:', smurf)
        console.log('Dispatching: ADD_SMURF_START')
        dispatch({
            type: ADD_SMURF_START
        })
        axios.post('http://localhost:3333/smurfs', smurf)
        .then((res) => {
            console.log('Post Success.')
            console.log('Response:', res)
            console.log('Dispatching: ADD_SMURF_SUCCESS')
            dispatch({
                type: ADD_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            console.log('Post Failure.')
            console.error('Error response:', err)
            console.log('Dispatching: ADD_SMURF_FAILURE')
            dispatch({
                type: ADD_SMURF_FAILURE
            })
        })
        
       


    }
}