import React from "react";

function ClickComponent() {
  function ClickHandler() {
    console.log("Clicked on Button");
  }

  return (
    <div>
      <button onClick={ClickHandler}>Click Me</button>
    </div>
  );
}

export default ClickComponent;
