import React from "react";
import { useForm } from "react-hook-form";

const Confirmation = ({ formData, onSubmit, onBack, loading }) => {
  const { handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h3>Confirmation</h3>
      <div>
        <div className="form-field">
          <label htmlFor="name" className="form-label small">
            Name{" "}
          </label>
          <p>{formData.name}</p>
        </div>
        <div className="form-field">
          <label htmlFor="email" className="form-label small">
            Email{" "}
          </label>
          <p>{formData.email}</p>
        </div>
        <div className="form-field">
          <label htmlFor="password" className="form-label small">
            Password{" "}
          </label>
          <p>{formData.password ? "******" : ""}</p>
        </div>
        <div className="form-field">
          <label htmlFor="color" className="form-label small">
            Favorite Color{" "}
          </label>
          <p>{formData.color}</p>
        </div>
        <div className="form-field">
          <label htmlFor="terms" className="form-label small">
            Agreed to Terms{" "}
          </label>
          <p>{formData.terms ? "Yes" : "No"}</p>
        </div>
      </div>
      <div className="form-actions">
        <button
          type="button"
          onClick={onBack}
          className="btn"
          disabled={loading}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Confirmation;
