import { NUM_MIN_ALTER, NUM_MAX_ALTER } from '../actions/actionTypes';

const initialState = {
    min: 1,
    max: 100
}

export default function(state = initialState, action) {
        
    switch(action.type) {

        case NUM_MIN_ALTER:
            return {
                ...state,
                min: action.payload
            }
        break;
        case NUM_MAX_ALTER:
            return {
                ...state,
                max: action.payload
            }
        break;
        default:
            return state;

    }

    
}