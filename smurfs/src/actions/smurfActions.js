    import axios from 'axios';
    
    
    export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
    export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURF_SUCCESS';
    export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'


    export function getSmurfs() { 
        return (dispatch) => {
        console.log('Dispatching: FETCH_SMURFS_START')
        dispatch({
            type: FETCH_SMURFS_START
        })
        axios.get('http://localhost:3333/smurfs')
            .then((res) => {
                console.log('Get Success. Data:')
                console.log(res)
                console.log('Dispatching: FETCH_SMURF_SUCCESS')
                dispatch({
                    type: FETCH_SMURFS_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log('Get Failure. Err:')
                console.log(err)
                console.log('Dispatching: FETCH_SMURF_FAILURE')
                dispatch({
                    type: FETCH_SMURFS_FAILURE
                })
            })
        }
    }