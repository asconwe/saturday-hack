import React from 'react'
class Student extends React.Component {
  Constructor(){
    super();
    this.state = {   
      name:"Name",
      img:"http:www.img.jpg"
    };
  },
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
                <img alt="Student Image" src={this.props.img} width="100%" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
              <h1>{this.props.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3> Followers: {this.props.followers} </h3>
          </div>
          <div className="col-md-6">
            <h3> Repos {this.props.public_repos} </h3>
          </div>
        </div>
    );
  }
}

export default Student