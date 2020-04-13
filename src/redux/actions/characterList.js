import {
    CHARACTERS_REQUEST_LOADING, 
    CHARACTERS_REQUEST,
    CHARACTER_REQUEST_ERROR
} from './actionTypes'

import axios from 'axios'
import errorMassage from '../../components/UI/errorMassage'

export const characters = () => async dispatch => {
	try {
		dispatch(charactersRequestLoading())
		const url = 'http://localhost:3001/characters'
		const response = await axios.get(url)
		dispatch(charactersRequest(response.data))
	} catch (e) {
		dispatch(charactersRequestError())  
		errorMassage()
	}
}

export const characterDelete = id => async dispatch => {
	try {
		const url = `http://localhost:3001/characters/${id}`
		await axios.delete(url)
		dispatch(characters())
	} catch (e) {
		dispatch(charactersRequestError()) 
		errorMassage()
	}
}

export const charactersRequestLoading = () => {
	return {
		type: CHARACTERS_REQUEST_LOADING
	}
}

export const charactersRequest = list => {
	return {
		type: CHARACTERS_REQUEST,
		list
	}
}

export const charactersRequestError = () => {
	return {
		type: CHARACTER_REQUEST_ERROR
	}
}