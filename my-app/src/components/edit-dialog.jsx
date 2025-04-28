import "./add-dialog";
import React, { useState } from "react";

const EditDialog = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    name: props.name,
    level: props.level,
    rating: props.rating,
    prev_img: props.main_image,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const response = await fetch(
      `http://localhost:3002/api/cookies/${props._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Cookie Successfully updated");
      event.target.reset(); //reset your form fields
      props.editCookies(await response.json());
      props.closeDialog();
    } else {
      console.log("Error editing cookie", response);
      setResult(response.message);
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
          <p>
            <label htmlFor="name ">Cookie Name:</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={inputs.name || ""}
                onChange={handleChange}
                required 
            />
            </p>
            <p>
                <label htmlFor="level">Level:</label>
                <input 
                    type="text"    
                    id="level" 
                    name="level" 
                    value={inputs.level || ""} 
                    onChange={handleChange}
                    required    
                />
            </p>
            <p>
                <label htmlFor="rating">Rating:</label>
                <input 
                    type="number" 
                    id="rating"     
                    name="rating" 
                    value={inputs.rating || ""} 
                    onChange={handleChange}
                    required 
                />
            </p>
            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img != null
                      ? URL.createObjectURL(inputs.img)
                      : inputs.prev_img != null
                      ? `http://localhost:3002/${inputs.prev_img}`
                      : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;