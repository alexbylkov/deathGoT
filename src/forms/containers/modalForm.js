import React from 'react'
import ModalForm from '../components/modalForm'
import {connect} from 'react-redux'
import {Formik} from 'formik'
import {addCharacter, characterFormClose} from '../../redux/actions/characterForm'

const ModalFormContainer = ({initialData, formVisible, addCharacter, formLoading, characterFormClose}) => {
    
	return formVisible ? 
	<Formik
	initialValues={initialData ? {...initialData} : null}
	onSubmit={values => {
		addCharacter(values)
	}}
	onReset={() => characterFormClose()}
	validate={values => {
		const errors = {}
		if (!values.character) errors.character = 'Укажите имя персонажа'
		if (!values.description) errors.description = 'Укажите описание персонажа'
		if (!values.death) errors.death = 'Укажите причину смерти'
		if (!values.killer) errors.killer = 'Укажите убийцу персонажа'
		if (!values.gun) errors.gun = 'Укажите чем убили персонажа'
		return errors
	}} 
	>
		{
			({handleSubmit, touched, errors, handleChange, handleBlur, values, setFieldValue, handleReset, isValidating}) => (
				<ModalForm 
				handleSubmit={handleSubmit}
				touched={touched}
				errors={errors}
				handleChange={handleChange}
				handleBlur={handleBlur}
				values={values}
				setFieldValue={setFieldValue}
				formVisible={formVisible}
				formLoading={formLoading}
				handleReset={handleReset}
				isValidating={isValidating}
				/>
			)
		}
	</Formik> : null 
}

const mapStateToProps = state => {
	return {
		formVisible: state.characterForm.formVisible,
		initialData: state.characterForm.item,
		formLoading: state.characterForm.loading
	}
}

export default connect(mapStateToProps, {addCharacter, characterFormClose})(ModalFormContainer)