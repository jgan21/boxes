import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
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


  /** Add box with its characteristics -
   * id, height, width, and backgroundColor
   */

  function addBox(box){
    let newBox = { ...box, id: uuid() };
    setBoxes(currB => [...currB, newBox]);
  }

  /** remove box with the same id. */
  function removeBox(id){
    const remainingBs = boxes.filter(b => b.id !== id);
    setBoxes(remainingBs);
  }

  return (
    <div className="BoxList">
        <NewBoxForm addBox={addBox}/>
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

export default BoxList;