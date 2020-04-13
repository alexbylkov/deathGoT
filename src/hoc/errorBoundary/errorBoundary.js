import React, {Component} from 'react'

export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    render() {
        if (this.state.error) return (
            <div className="warning">
                <h1 className="error">Что-то пошло не так... Пожалуйста, перезапустите страницу</h1>
            </div>
        )
        return this.props.children;
    }
}