import React from 'react'

class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
        }

    
    }

    componentDidMount() {
        console.log(`Welcome to ProjectHub Console!`)
    }

    render() {
        return (
                <div>
                    <h2>Hello from BrowserRouter on Application.jsx</h2>
                </div>
        )
    }

}

export default Application
