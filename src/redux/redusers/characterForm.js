import {
    CHARACTER_FORM_ADD, 
    CHARACTER_FORM_CHANGE, 
    CHARACTER_FORM_LOADING,
	CHARACTER_FORM_CLOSE
} from '../actions/actionTypes'

const initialState = {
	formVisible: false,
	item: {},
	loading: false
}

const SearchReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHARACTER_FORM_ADD:
		return {
			...state, 
			formVisible: true
		}
		case CHARACTER_FORM_CHANGE:
		return {
			...state, 
			item: action.item,
			formVisible: true
		}
		case CHARACTER_FORM_LOADING:
		return {
			...state, 
			loading: true
		}
		case CHARACTER_FORM_CLOSE:
		return {
			...state, 
			loading: false,
			formVisible: false,
			item: {}
		}
		default:
		return state
	}
}

export default SearchReducer