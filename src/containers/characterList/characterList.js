import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {characters} from '../../redux/actions/characterList'
import {characterDelete, characterFormChange} from '../../redux/actions/characterForm'
import CharactersTable from '../../components/charactersTable/charactersTable'

const CharacterList = ({characters, list, characterDelete, characterFormChange}) => {

    useEffect(() => {characters()}, [characters])

    return (
        <>
            <h1>xfnf</h1>
            {list ? <CharactersTable data={list} characterDelete={characterDelete} characterFormChange={characterFormChange} /> : null}

        </>
    )
}

const mapStateToProps = state => {
	return {
		list: state.characterList.list
	}
}

export default connect(mapStateToProps, {characters, characterDelete, characterFormChange})(CharacterList)