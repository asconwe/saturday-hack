// Include React
import React from 'react'

// Including the Link component from React Router to navigate within our application without full page reloads
// import {
//     HashRouter,
//     Route,
//     Link
// } from 'react-router-dom'

// Import components
import Student from './body-children/Student'
// Create Main component
class Body extends React.Component {
    constructor() {
        super();
        this.state = {
         
        }
    }

    render() {
        return (
            <div className="col-xs-12">
                <div className="row">
                    {console.log(this.props.studentList)}    
                    {this.props.studentList.map((student, index) => (<Student img={student.avatar_url} name={student.login} />))}
                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
export default Body



