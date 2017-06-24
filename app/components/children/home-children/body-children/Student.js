import React from 'react'
class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Name",
      img: "http:www.img.jpg"
    };
  }
  render() {
    return (
      <div className="col-md-12">
        <div>
          <img alt="Student Image" src={this.props.img} class="img img-responsive" />
        </div>
        <h1>{this.props.name}</h1>

        <h3> Followers  Repos </h3>
      </div>

    );
  }
}

export default Student