// Include React
import React from 'react'

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
            queryValue: event.target.value + " "
        })
    }
    
    render() {
        return (
            <div className="col-xs-12">
                <div className="input-group">
                    <label htmlFor="filter">Filter by username</label>
                    <input className="form-control" type="text" name="filter" onChange={this.handleChange} value={this.state.queryValue}/>
                </div>
                <hr />
            </div>
        )
    }
}

// Export the component back for use in other files
export default Query