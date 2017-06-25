import React from 'react';


class UserBio extends React.Component {
    render() {
        return (
            <div className="col-xs-12">
                <div className="row">
                    <div className="col-xs-6 col-sm-4 col-md-3">
                        {console.log(this.props)}
                        <img src={this.props.avatar_url} className="img img-responsive" />
                    </div>
                    <div className="col-md-3">
                        <h3>Username: {this.props.login}</h3>
                    </div>
                </div>
            </div>

        );
    }

}

export default UserBio
