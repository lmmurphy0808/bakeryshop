import "./add-dialog.css";
import React, { useState } from "react";

const DeleteDialog = (props) => {
  const [result, setResult] = useState("");

  const deleteCookies = async (event) => {
    const response = await fetch(
      `http://localhost:3002/api/cookies/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Cookie Successfully deleted");
      props.hideCookies();
    } else {
      console.log("Error deleting cookie", response);
      setResult(response.message);
    }

    props.closeDialog();
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick={deleteCookies}>Yes</button>
              <button onClick={props.closeDialog}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;