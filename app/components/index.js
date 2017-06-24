// Include React
import React from 'react'

// Including the Link component from React Router to navigate within our application without full page reloads
// import {
//     HashRouter,
//     Route,
//     Link
// } from 'react-router-dom'

// Import components
import Profile from './children/Profile'

// Create Main component
class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Github Project Viewer</h1>
                    </div>
                </div>
                <Profile />
            </div>
        )
    }
}

// Export the component back for use in other files
export default App