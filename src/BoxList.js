import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/** BoxList will display boxes and the new box form.
 *
 * State: an array of boxes
 * [{backgroundColor, width, height},...]
 *
 * Props: none
 *
 * App -> BoxList -> Box & NewBoxForm
 */
function BoxList(){
  const [boxes, setBoxes] = useState([])


  /** Add box with it's characteristic -
   * id, height, width, and backgroundColor
   */

  function addBox(box){
    let newBox = { ...box, id: uuid() };
    setBoxes(currB => [...currB, newBox]);
  }

  /** remove box with the same id. */
  function removeBox(){

  }

  return (
    <div className="BoxList">
        <NewBoxForm />
        {boxes.map(({id, width, height, backgroundColor }) => (
          <Box
            key={id}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            removeBox={removeBox}
            />
        ))}
    </div>
  )
}
