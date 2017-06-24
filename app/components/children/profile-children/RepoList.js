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
            <div className="col-xs-12">
                {this.props.repoList.map((repo, index) => (<Repo repoName={} dateCreated={} description={} languages={} key={index}))}
            </div>
        )
    }
}

// Export the component back for use in other files
export default Main