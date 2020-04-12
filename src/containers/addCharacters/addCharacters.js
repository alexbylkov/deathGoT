import React from 'react'
import {connect} from 'react-redux'
import {characterFormAdd} from '../../redux/actions/characterForm'

const AddCharacters = ({characterFormAdd}) => (
    <button onClick={characterFormAdd}>Добавить героя!</button>
)

export default connect(null, {characterFormAdd})(AddCharacters)