import "./css/dialog.css";
import React, { useState } from "react";

const AddDialog = (props) => {
    const onSubmit = () => {};

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDialog}>
                        &times;
                    </span>
                    <form id="add-property-form" onSubmit={onSubmit}> 
                        <p>
                            <label htmlFor="name ">Cookie Type:</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="level">Level:</label>
                            <input type="text" id="level" name="level" required />
                        </p>
                        <p>
                            <label htmlFor="rating">Rating:</label>
                            <input type="number" id="rating" name="rating" required />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDialog;