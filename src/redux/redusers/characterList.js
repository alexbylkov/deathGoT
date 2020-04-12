import {
    CHARACTERS_REQUEST_LOADING,
    CHARACTERS_REQUEST,
    CHARACTER_REQUEST_ERROR
} from '../actions/actionTypes'

const initialState = {
    loading: false,
    list: [],
    error: false
}

export default function searchReducer(state = initialState, action) {
	switch (action.type) {
		case CHARACTERS_REQUEST_LOADING:
		return {
			...state, 
			loading: true
        }
        case CHARACTERS_REQUEST:
        return {
            ...state, 
            list: action.list,
            loading: false
        }
        case CHARACTER_REQUEST_ERROR:
        return {
            ...state, 
            error: true
        }
		default:
		return state
	}
}