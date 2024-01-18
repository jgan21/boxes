import React from "react";

/** Display box with it's characteristics.
 *
 * Props:
 * - id
 * - width
 * - height
 * - backgroundColor
 * - removeBox (function)
 *
 * State: None
 *
 * BoxList -> Box
 */

function Box({ id, width, height, backgroundColor, removeBox }) {
  console.log("BoxIdInComponent=", id)
  const boxStyle = {
    'width': `${width}px`,
    'height': `${height}px`,
    'backgroundColor': backgroundColor};

    /** Handle click by calling remove box from parent.  */
    function handleClick() {
      console.log("idInHandleClick=", id)
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