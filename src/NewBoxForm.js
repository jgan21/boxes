import { useState } from "react";

/** Add new box form.
 *
 * Props:
 * - addBox: function from parent;
 *
 * State:
 * formData: { width, height, backgroundColor }
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const initialState = {
    width: "",
    height: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(initialState);

  /** Update local state w/curr state of inputs. */
  function handleChange(evt){
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name] : value,
    }));
  }

  /** Send {width, height, backgroundColor} to parent & clear form. */
  function handleSubmit(evt){
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  return (
    <div className="NewBoxForm">
      <form onSubmit={handleSubmit}>
      <label htmlFor="NewBoxForm-height">Height</label>
      <input
          id="NewBoxForm-height"
          name="height"
          value={formData.height}
          onChange={handleChange}
      />
      <label htmlFor="NewBoxForm-width">Width</label>
      <input
          id="NewBoxForm-width"
          name="width"
          value={formData.width}
          onChange={handleChange}
      />
      <label htmlFor="NewBoxForm-backgroundColor">Background Color</label>
      <input
          id="NewBoxForm-backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
      />
      <button className="NewBoxForm-button">Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;