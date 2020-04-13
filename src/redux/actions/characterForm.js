import {
    CHARACTER_FORM_ADD, 
    CHARACTER_FORM_CHANGE, 
    CHARACTER_FORM_LOADING,
    CHARACTER_FORM_CLOSE
} from './actionTypes'

import axios from 'axios'
import shortId from 'short-id'
import {characters} from './characterList'
import errorMassage from '../../components/UI/errorMassage'

export const characterFormAdd = () => {
	return {
		type: CHARACTER_FORM_ADD
	}
}

export const characterFormChange = item => {
	return {
        type: CHARACTER_FORM_CHANGE,
        item
	}
}

export const addCharacter = item => async dispatch => {
    try {
        dispatch(characterFormLoading())
        const url = `http://localhost:3001/characters`
        if (item.id) {
            const url = `http://localhost:3001/characters/${item.id}`
            await axios.patch(url, item)
        } else {
            const id = shortId.generate()
            await axios.post(url, {id, ...item})
        }
        dispatch(characters())
    } catch (e) {
        errorMassage()
    } finally {
        dispatch(characterFormClose())
    }
}

export const characterFormLoading = () => {
	return {
        type: CHARACTER_FORM_LOADING
	}
}

export const characterFormClose = () => {
	return {
        type: CHARACTER_FORM_CLOSE
	}
}





