import {
    CHARACTERS_REQUEST_LOADING, 
    CHARACTERS_REQUEST,
    CHARACTER_REQUEST_ERROR
} from './actionTypes'

import axios from 'axios'

// import errorMassage from '../../components/UI/errorMassage'
// import getSearch from '../../axios/getSearch'
// import {
//     SEARCH_REQUEST_LOADING,
//     SEARCH_REQUEST_SUCCESS,
//     SEARCH_REQUEST_ERROR,
//     SEARCH_REQUEST_DELETE,
//     SEARCH_REQUEST_TEXT
// } from './actionTypes'

// export function characters() {
//     return async dispatch => {
//         try {
//             dispatch(charactersRequestLoading())
//             dispatch(searchRequestText(searchText))
//             await getSearch(searchText, order, results)
//             .then(res => dispatch(searchRequestSuccess(res)))
//         } catch (e) {
//             dispatch(searchRequestError())  
//             errorMassage()
//         }
//     }
// }

export const characters = () => {
    return async (dispatch) => {
		try {
			dispatch(charactersRequestLoading())
			const url = 'http://localhost:3001/characters'
			// const user = getState().auth.token
			const response = await axios.get(url)
            // const favourites = []
            
            console.log(response.data)
	
			// Object.keys(response.data).forEach(key => favourites.push({ ...response.data[key], id: key }))

			// const list = favourites.filter(item => item.userName === user)
			dispatch(charactersRequest(response.data))
		} catch (e) {
			dispatch(charactersRequestError())  
			// errorMassage()
		}
    }
}

export function charactersRequestLoading() {
	return {
		type: CHARACTERS_REQUEST_LOADING
	}
}

export function charactersRequest(list) {
	return {
		type: CHARACTERS_REQUEST,
		list
	}
}

export function charactersRequestError() {
	return {
		type: CHARACTER_REQUEST_ERROR
	}
}

// export function searchRequestDelete() {
// 	return {
// 		type: CHARACTER_REQUEST_DELETE
// 	}
// }

// export function searchRequestText(text) {
// 	return {
// 		type: CHARACTER_REQUEST_TEXT,
// 		text
// 	}
// }