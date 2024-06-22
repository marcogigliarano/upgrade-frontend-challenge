import React from "react";

const Confirmation = ({ formData, onSubmit, onBack, loading }) => (
  <div>
    <h3>Confirm Your Details</h3>
    <div>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password ? "******" : ""}</p>
      <p>Favorite Color: {formData.color}</p>
      <p>Agreed to Terms: {formData.terms ? "Yes" : "No"}</p>
    </div>
    <button onClick={onBack}>Back</button>
    <button onClick={onSubmit} disabled={loading}>
      {loading ? "Submitting..." : "Submit"}
    </button>
  </div>
);

export default Confirmation;
