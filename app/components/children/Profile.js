// Include React
import React from 'react'

import axios from 'axios'

// Import components
import UserBio from './profile-children/UserBio'
import RepoList from './profile-children/RepoList'

// Create Main component
class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            login: "",
            avatar_url: "",
            followers: 0,
            repos: 0,
            repoList: ['']
        };
    }

    componentDidMount() { 
        const url = 'https://api.github.com/users/' + this.props.match.params.user
        axios.get(url).then((response) => {
            console.log('response', response)
            this.setState({
                login: response.data.login,
                avatar_url: response.data.avatar_url,
                followers: response.data.followers,
                repos: response.data.public_repos
            });
            axios.get(url + '/repos').then((repoResponse) => { 
                this.setState({
                    repoList: repoResponse.data
                })
            })
        });
    }

    render() {
        return (
            <div>
                <div className="row">    
                    <UserBio avatar_url={this.state.avatar_url} login={this.state.login}/>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Repositories</h2>    
                    </div>
                    <RepoList repoList={this.state.repoList} />
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Profile

