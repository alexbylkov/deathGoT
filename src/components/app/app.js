import React from 'react'
import AddCharacters from '../../containers/addCharacters'
import {connect} from 'react-redux'
import ModalForm from '../../forms/containers/modalForm'
import CharacterList from '../../containers/characterList'

const App = ({formVisible}) => {
  return (
    <div className="App">
      <h1>База данных смертей героев "Игры престолов"!</h1>
      <AddCharacters/>
      <CharacterList/>
      {formVisible ? <ModalForm/> : null}
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    formVisible: state.characterForm.formVisible
  }
}

export default connect(mapStateToProps)(App)
