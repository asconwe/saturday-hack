import React from 'react'
import { Link, HashRouter } from 'react-router-dom'
class Student extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <HashRouter>
        <Link to={"/Profile/" + this.props.name}>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <div>
              <img alt="Student Image" src={this.props.img} className="img img-responsive" />
            </div>
            <h1>{this.props.name}</h1>
            <h3> Followers  Repos </h3>
          </div>
        </ Link>
      </ HashRouter>
    );
  }
}

export default Student