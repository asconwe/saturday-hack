// Include React
import React from 'react'

// Including the Link component from React Router to navigate within our application without full page reloads
// import {
//     HashRouter,
//     Route,
//     Link
// } from 'react-router-dom'

// Import components
import Repo from './repolist-children/Repo'
// Create Main component
class RepoList extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    {this.props.repoList.map((repo, index) => (<Repo repoName={repo.name} dateCreated={repo.created_at} description={repo.description} languages={repo.language} key={index} />))}
                </div>

           </div>
        )
    }
}

// Export the component back for use in other files
export default RepoList