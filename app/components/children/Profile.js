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
            repoList: []
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <UserBio />
                </div>
                <div className="row">
                    <RepoList />
                    
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Main

