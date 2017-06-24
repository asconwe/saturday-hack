// Include React
import React from 'react'

// Including the Link component from React Router to navigate within our application without full page reloads
// import {
//     HashRouter,
//     Route,
//     Link
// } from 'react-router-dom'

// Import components

// Create Main component
class Query extends React.Component {
    constructor() {
        super();
        this.state = {
            queryValue: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) { 
        this.setState({ queryValue: event.target.value })
        this.props.filterList({
            queryValue: event.target.value
        })
    }
    
    render() {
        return (
            <div className="col-xs-12">
                <div className="input-group">
                    <input className="form-control" type="text" onChange={this.handleChange} value={this.state.queryValue}/>
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Query