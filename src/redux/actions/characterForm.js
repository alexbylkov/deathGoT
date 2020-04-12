import {
    CHARACTER_FORM_ADD, 
    CHARACTER_FORM_CHANGE, 
    // CHARACTER_FORM_DELETE, 
    CHARACTER_FORM_LOADING,
    CHARACTER_FORM_CLOSE
} from './actionTypes'

import axios from 'axios'
import shortId from 'short-id'
import {characters} from './characterList'



export function addCharacter(item) {
    return async dispatch => {
		try {
			dispatch(characterFormLoading())
			const url = `http://localhost:3001/characters`
            console.log(item)
            if (item.id) {
                const url = `http://localhost:3001/characters/${item.id}`
                await axios.patch(url, item)
                .then(e => console.log(e))
            } else {
                const id = shortId.generate()
                await axios.post(url, {id, ...item})
            }
            dispatch(characters())
            

            // debugger
            // console.log({key: key, ...item})


            // .then(e => console.log(e))
			await dispatch(characterFormClose())
        } catch (e) {
            // dispatch(searchFormError())  
            // errorMassage()
        }
    }
}

export function characterDelete(id) {
    return async dispatch => {
		try {
            // dispatch(characterFormLoading())
            const url = `http://localhost:3001/characters/${id}`
            
            await axios.delete(url)
            dispatch(characters())
        } catch (e) {
            // dispatch(favouritesError())  
            // errorMassage()
        }
    }
}

export function characterFormAdd() {
	return {
		type: CHARACTER_FORM_ADD
	}
}

export function characterFormChange(item) {
	return {
        type: CHARACTER_FORM_CHANGE,
        item
	}
}

export function characterFormLoading() {
	return {
        type: CHARACTER_FORM_LOADING
	}
}

export function characterFormClose() {
	return {
        type: CHARACTER_FORM_CLOSE
	}
}