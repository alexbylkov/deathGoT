import React from 'react'
import AddCharacters from '../../containers/addCharacters'
import {connect} from 'react-redux'
import ModalForm from '../../forms/containers/modalForm'
import CharacterList from '../../containers/characterList'
import s from './app.module.sass'


const App = ({formVisible}) => (
  <div className={s.app}>
    <h1>База данных смертей героев "Игры престолов"!</h1>
    <AddCharacters/>
    <CharacterList/>
    {formVisible ? <ModalForm/> : null}
  </div>
)

const mapStateToProps = state => {
  return {
    formVisible: state.characterForm.formVisible
  }
}

export default connect(mapStateToProps)(App)
