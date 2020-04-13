import React from 'react'
import {connect} from 'react-redux'
import {characterFormAdd} from '../../redux/actions/characterForm'
import s from './addCharacters.module.sass'

const AddCharacters = ({characterFormAdd}) => (
    <button onClick={characterFormAdd} className={s.button}>Добавить героя!</button>
)

export default connect(null, {characterFormAdd})(AddCharacters)