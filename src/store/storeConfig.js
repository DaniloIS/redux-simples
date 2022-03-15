import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numbers: function(state, action) {
        
        switch(action.type) {

            case 'NUM_MIN_ALTER':
                return {
                    ...state,
                    min: action.payload
                }
            break;
            case 'NUM_MAX_ALTER':
                return {
                    ...state,
                    max: action.payload
                }
            break;
            default:
                return {
                    min: 1,
                    max: 5000
                }

        }

        
    },

    names: function(state, action) {
        console.log(state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;