import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
} from '../actions/smurfActions';



export const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: null
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURFS_SUCCESS: 
            return {
                ...state,
                smurfs: [...action.payload],
                isFetching: false
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                smurfs: [],
                isFetching: false,
                error: 'Smurf get action failure. Could not find the smurf server, sorry. My bad.'
            }
        case ADD_SMURF_START:
            return {
                ...state,
                isPosting: true
            };
        case ADD_SMURF_SUCCESS: 
            return {
                ...state,
                isPosting: false,
                smurfs: action.payload
            };
        case ADD_SMURF_FAILURE: 
            return {
                ...state,
                isPosting: false
            };
        default:
            return state;
    }
}