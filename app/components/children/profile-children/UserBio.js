import React from 'react';


export default class UserBio extends React.Component {
	render() {
		return (
                    <div className="row">
                        <div className="col-md-4">
                            <img src={this.props.avatar_url} className="img img-responsive" />
 
                            
                        </div>
                        <div className="col-md-3">
                            <p>Name: {this.props.login}</p>
                        </div>
                    </div>
        
			);			
        }

    }