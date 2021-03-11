/**Using props in the Class compoenents */
import React, { Component } from "react";

class Heronames extends Component {
  render() {
    return (
      <div>
        Welcome is {this.props.name} a.k.a {this.props.heronames}
      </div>
    );
  }
}
export default Heronames;
