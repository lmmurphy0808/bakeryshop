import "./css/dialog.css";
import React, { useState } from "react";
import axios from 'axios';

const AddDialog = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        /*const response = await fetch("http://localhost:3002/api/cookies/", {
            method: "POST",
            body: formData,
          }); 

          if (response.status === 200) {
            setResult("Cookie Successfully Added!");
            event.target.reset();
            props.addCookiePlan(response.data);  // Use the response data here
            props.closeDialog();
        } else {
            setResult("Error adding cookie");
            console.log("Error adding cookie", response);
        }*/

        try {
            const response = await axios.post(
                "http://localhost:3002/api/cookies/"
                //"https://bakery-backend-t744.onrender.com/"
                //"https://bakery-backend-t744.onrender.com/api/cookies"
                , formData);
                
            if (response.status === 200) {
                setResult("Cookie Successfully Added!");
                event.target.reset();
                props.addCookiePlan(response.data);  // Use the response data here
                props.closeDialog();
            } else {
                setResult("Error adding cookie");
                console.log("Error adding cookie", response);
            }
        } catch (error) {
            setResult("Error adding cookie");
            console.log("Error", error);
        }
    };
    
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

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeDialog}
                    >
                        &times;
                    </span>
                    <form id="add-property-form" onSubmit={onSubmit}>
                        <p>
                            <label htmlFor="name">Cookie Name:</label>
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
                                    src={inputs.img ? URL.createObjectURL(inputs.img) : ""}
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
                    </form>
                    <p>{result}</p>
                </div>
            </div>
        </div>
    );
};

export default AddDialog;
