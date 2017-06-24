// Include React
import React from 'react'

// Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Import components
import UserBio from './profile-children/UserBio'
import RepoList from './profile-children/RepoList'

// Create Main component
class Profile extends React.Component {
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
export default Profile

