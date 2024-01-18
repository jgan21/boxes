import React from "react";

/**  */
function Box({ id, width, height, backgroundColor, removeBox }) {
  const boxStyle = {
    'width': `${width}px`,
    'height': `${height}px`,
    'backgroundColor': backgroundColor};

    function handleClick() {
      removeBox(id);
    }

  return (
    <div>
      <div style={ boxStyle }></div>
      <button onClick={ handleClick }>X</button>
    </div>
  );
}

export default Box;