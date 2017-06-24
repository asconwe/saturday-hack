// Include React
import React from 'react'

// Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Import components

// Create Main component
class Repo extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2>{this.props.repoName}</h2>
                    <p>{this.props.dateCreated}</p>
                </div>
                <div className="panel-body">
                    <h4>{this.props.description}</h4>
                    <h4>{this.props.languages}</h4>
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Main