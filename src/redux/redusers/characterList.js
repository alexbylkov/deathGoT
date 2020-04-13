import {
    CHARACTERS_REQUEST_LOADING,
    CHARACTERS_REQUEST,
    CHARACTER_REQUEST_ERROR
} from '../actions/actionTypes'

const initialState = {
    loading: false,
    list: null
}

const SearchReducer = (state = initialState, action) => {
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
            loading: false,
            list: null
        }
		default:
		return state
	}
}
export default SearchReducer