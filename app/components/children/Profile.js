// Include React
import React from 'react'

// Including the Link component from React Router to navigate within our application without full page reloads
// import {
//     HashRouter,
//     Route,
//     Link
// } from 'react-router-dom'

// Import components
import UserBio from './profile-children/UserBio'
import RepoList from './profile-children/RepoList'

// Create Main component
class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            repoList: [
                {
                    "id": 94632783,
                    "name": "addresses",
                    "full_name": "asconwe/addresses",
                    "owner": {
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
                        "site_admin": false
                    },
                    "private": false,
                    "html_url": "https://github.com/asconwe/addresses",
                    "description": "addresses",
                    "fork": false,
                    "url": "https://api.github.com/repos/asconwe/addresses",
                    "forks_url": "https://api.github.com/repos/asconwe/addresses/forks",
                    "keys_url": "https://api.github.com/repos/asconwe/addresses/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/asconwe/addresses/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/asconwe/addresses/teams",
                    "hooks_url": "https://api.github.com/repos/asconwe/addresses/hooks",
                    "issue_events_url": "https://api.github.com/repos/asconwe/addresses/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/asconwe/addresses/events",
                    "assignees_url": "https://api.github.com/repos/asconwe/addresses/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/asconwe/addresses/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/asconwe/addresses/tags",
                    "blobs_url": "https://api.github.com/repos/asconwe/addresses/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/asconwe/addresses/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/asconwe/addresses/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/asconwe/addresses/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/asconwe/addresses/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/asconwe/addresses/languages",
                    "stargazers_url": "https://api.github.com/repos/asconwe/addresses/stargazers",
                    "contributors_url": "https://api.github.com/repos/asconwe/addresses/contributors",
                    "subscribers_url": "https://api.github.com/repos/asconwe/addresses/subscribers",
                    "subscription_url": "https://api.github.com/repos/asconwe/addresses/subscription",
                    "commits_url": "https://api.github.com/repos/asconwe/addresses/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/asconwe/addresses/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/asconwe/addresses/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/asconwe/addresses/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/asconwe/addresses/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/asconwe/addresses/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/asconwe/addresses/merges",
                    "archive_url": "https://api.github.com/repos/asconwe/addresses/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/asconwe/addresses/downloads",
                    "issues_url": "https://api.github.com/repos/asconwe/addresses/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/asconwe/addresses/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/asconwe/addresses/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/asconwe/addresses/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/asconwe/addresses/labels{/name}",
                    "releases_url": "https://api.github.com/repos/asconwe/addresses/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/asconwe/addresses/deployments",
                    "created_at": "2017-06-17T15:36:10Z",
                    "updated_at": "2017-06-17T15:37:36Z",
                    "pushed_at": "2017-06-17T16:20:19Z",
                    "git_url": "git://github.com/asconwe/addresses.git",
                    "ssh_url": "git@github.com:asconwe/addresses.git",
                    "clone_url": "https://github.com/asconwe/addresses.git",
                    "svn_url": "https://github.com/asconwe/addresses",
                    "homepage": null,
                    "size": 483,
                    "stargazers_count": 0,
                    "watchers_count": 0,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 0,
                    "mirror_url": null,
                    "open_issues_count": 1,
                    "forks": 0,
                    "open_issues": 1,
                    "watchers": 0,
                    "default_branch": "master"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                    <UserBio
                    login={this.state.repoList[0].owner.login} 
                    avatar_url={this.state.repoList[0].owner.avatar_url}
                    />

               
                    <RepoList repoList={this.state.repoList} />

            </div>
        )
    }
}

// Export the component back for use in other files
export default Profile
