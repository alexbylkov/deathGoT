import React from 'react'
import {Form, Input, Button, Modal} from 'antd'

const validateField = (touched, errors) => {
    if (touched) {
        if (errors) {
            return "error"
        } else {
            return "success"
        }
    } else {
        return ""
    }
}

const ModalForm = (props) => {
    const {handleSubmit, touched, errors, handleChange, handleBlur, values, formVisible, formLoading, handleReset, errMas, isValidating} = props
    console.log(props)

    const action = (values.id ? 'Изменить' : 'Сохранить')
    return (
        <Modal
        visible={formVisible}   
        title={`${action} героя`}
        onCancel={handleReset}
        footer={[
            <Button 
            key="back" 
            onClick={handleReset} > 
            Отмена </Button>,
            <Button 
            key="submit" 
            type="primary" 
            loading={formLoading}        
            onClick={handleSubmit} >
            {action}</Button>
        ]} >
            <Form layout="vertical" >

                <Form.Item 
                required
                validateStatus={validateField(touched.character, errors.character)}
                help={!touched.character ? null : errors.character}
                // help = { errors.character ? errors.character : "" }
                // validateStatus = { errors.character ? 'error' : '' }
                // help={errors.character && touched.character ? errors.character : ''}
                // validateStatus={errors.character && touched.character ? 'error' : ''}
                hasFeedback
                // hasFeedback={!!errors.character}
                // help={errors.character && touched.character ? errors.character : null}
                // validateStatus={errors.character && touched.character ? 'error' : ''}
                label="Имя персонажа">
                    <Input 
                    id="character"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.character}
                    label="Имя персонажа" />
                </Form.Item>
                <Form.Item 
                required
                validateStatus={validateField(touched.description, errors.description)}
                help={!touched.description ? null : errors.description}
                // help = { errors.description ? errors.description : "" }
                // validateStatus = { errors.description ? 'error' : '' }
                // help={errors.description && touched.description ? errors.description : ''}
                // validateStatus={errors.description && touched.description ? 'error' : ''}
                // hasFeedback
                hasFeedback
                // help={errors.description && touched.description ? errors.description : null}
                // validateStatus={errors.description && touched.description ? 'error' : ''}
                label="Описание персонажа">
                    <Input.TextArea  
                    id="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    label="Описание персонажа" />
                </Form.Item>
                <Form.Item 
                required
                hasFeedback
                validateStatus={validateField(touched.death, errors.death)}
                help={!touched.death ? null : errors.death}
                label="Причина смерти">
                    <Input 
                    id="death"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.death}
                    label="Причина смерти" />
                </Form.Item>
                <Form.Item 
                required
                hasFeedback
                validateStatus={validateField(touched.killer, errors.killer)}
                help={!touched.killer ? null : errors.killer}
                label="Кем убит">
                    <Input 
                    id="killer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.killer}
                    label="Кем убит" />
                </Form.Item>
                <Form.Item 
                required
                hasFeedback
                validateStatus={validateField(touched.gun, errors.gun)}
                help={!touched.gun ? null : errors.gun}
                label="Орудие убийства">
                    <Input 
                    id="gun"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gun}
                    label="Орудие убийства" />
                </Form.Item>
                {/* {errors.length && errMas ? <div>Заполните все поля</div> : null}   */}
                {/* {!values.character && !values.description && !values.death && !values.killer && !values.gun && !errors ? 
			        <div style={{color: "red"}}>Неверный логин или пароль</div> : null} */}
            </Form>
        </Modal>
    )
}

export default ModalForm