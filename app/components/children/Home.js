// Include React
import React from 'react'

// Including the Link component from React Router to navigate within our application without full page reloads
// import {
//     HashRouter,
//     Route,
//     Link
// } from 'react-router-dom'

// Import components
import Query from './home-children/Query'
import Body from './home-children/Body'

// Create Home component
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    "login": "asconwe",
                    "id": 19544383,
                    "avatar_url": "https://avatars3.githubusercontent.com/u/19544383?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/asconwe",
                    "html_url": "https://github.com/asconwe",
                    "followers_url": "https://api.github.com/users/asconwe/followers",
                    "following_url": "https://api.github.com/users/asconwe/following{/other_user}",
                    "gists_url": "https://api.github.com/users/asconwe/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/asconwe/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/asconwe/subscriptions",
                    "organizations_url": "https://api.github.com/users/asconwe/orgs",
                    "repos_url": "https://api.github.com/users/asconwe/repos",
                    "events_url": "https://api.github.com/users/asconwe/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/asconwe/received_events",
                    "type": "User",
                    "site_admin": false,
                    "name": null,
                    "company": null,
                    "blog": "",
                    "location": null,
                    "email": null,
                    "hireable": true,
                    "bio": null,
                    "public_repos": 29,
                    "public_gists": 1,
                    "followers": 1,
                    "following": 0,
                    "created_at": "2016-05-24T04:01:34Z",
                    "updated_at": "2017-06-04T23:45:51Z"
                },
                {
                    "login": "dasseya1",
                    "id": 3190320,
                    "avatar_url": "https://avatars2.githubusercontent.com/u/3190320?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/dasseya1",
                    "html_url": "https://github.com/dasseya1",
                    "followers_url": "https://api.github.com/users/dasseya1/followers",
                    "following_url": "https://api.github.com/users/dasseya1/following{/other_user}",
                    "gists_url": "https://api.github.com/users/dasseya1/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/dasseya1/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/dasseya1/subscriptions",
                    "organizations_url": "https://api.github.com/users/dasseya1/orgs",
                    "repos_url": "https://api.github.com/users/dasseya1/repos",
                    "events_url": "https://api.github.com/users/dasseya1/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/dasseya1/received_events",
                    "type": "User",
                    "site_admin": false,
                    "name": "Damien Asseya",
                    "company": null,
                    "blog": "https://www.linkedin.com/in/damienasseya",
                    "location": "Manassas, VA",
                    "email": null,
                    "hireable": true,
                    "bio": null,
                    "public_repos": 43,
                    "public_gists": 0,
                    "followers": 1,
                    "following": 6,
                    "created_at": "2013-01-05T03:10:07Z",
                    "updated_at": "2017-06-20T14:09:19Z"
                },
                {
                    "login": "nxanttopoulos",
                    "id": 25088349,
                    "avatar_url": "https://avatars1.githubusercontent.com/u/25088349?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/nxanttopoulos",
                    "html_url": "https://github.com/nxanttopoulos",
                    "followers_url": "https://api.github.com/users/nxanttopoulos/followers",
                    "following_url": "https://api.github.com/users/nxanttopoulos/following{/other_user}",
                    "gists_url": "https://api.github.com/users/nxanttopoulos/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/nxanttopoulos/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/nxanttopoulos/subscriptions",
                    "organizations_url": "https://api.github.com/users/nxanttopoulos/orgs",
                    "repos_url": "https://api.github.com/users/nxanttopoulos/repos",
                    "events_url": "https://api.github.com/users/nxanttopoulos/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/nxanttopoulos/received_events",
                    "type": "User",
                    "site_admin": false,
                    "name": null,
                    "company": null,
                    "blog": "",
                    "location": null,
                    "email": null,
                    "hireable": null,
                    "bio": null,
                    "public_repos": 20,
                    "public_gists": 0,
                    "followers": 0,
                    "following": 0,
                    "created_at": "2017-01-12T20:14:15Z",
                    "updated_at": "2017-05-17T22:28:04Z"
                }

            ]
        }
        this.filterList = this.filterList.bind(this);
    }
    filterList(input) {
        const filteredList = this.state.studentList.filter((student, index) => {
            const length = input.queryValue.length;
            console.log('length', length);
            const slicedStudent = student.login.slice(0, length);
            console.log('slicedStudent', slicedStudent)
            return slicedStudent === input.queryValue;
        })
        this.setState({
            studentList: filteredList
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <Query filterList={this.filterList} />
                </div>
                <div className="row">
                    <Body studentList={this.state.studentList} />
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Home

