// Include React
import React from 'react'

//Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Import components
import Profile from './children/Profile'
import Home from './children/Home'

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
                <HashRouter>
                    <div>
                        <div className="row">
                            <div className="col-xs-12">
                                <Link to="/"><h1>Github Project Viewer</h1></Link>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/Home" component={Home} />
                            <Route path="/Profile/:user" component={Profile} />
                        </div>
                    </div>
                </ HashRouter>
            </div>
        )
    }
}

// Export the component back for use in other files
export default App