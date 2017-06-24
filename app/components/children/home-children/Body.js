import React from 'react'
class Body extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}
	render(){
		return (
			<div className="col-xs-6 col-md-4 col-lg-3">
				{this.props.filteredStudents.map((student, index) => ( <Student name={student.name} img={student.img} / >))}
			</div>
		)
	}
}

export default Body