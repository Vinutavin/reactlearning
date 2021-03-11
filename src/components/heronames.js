/**Using props in the functional compoenents */
import React from "react";

const Greet = props => {
  return (
    <div>
      <h1>
        This is {props.name} a.k.a {props.heronames}
      </h1>
    </div>
  );
};
export default Greet;
