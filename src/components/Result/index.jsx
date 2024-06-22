import React from "react";

const Result = ({ isSuccess, onRetry, onRestart }) => {
  return (
    <div>
      {isSuccess ? (
        <div className="form-container">
          <h3>Success!</h3>
          <p>You should receive a confirmation email soon.</p>
          <div className="form-actions">
            <button onClick={onRestart} className="btn btn-primary">
              Restart
            </button>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <h3>Error</h3>
          <p>Uh oh. Something went wrong. Please try again later</p>
          <div className="form-actions">
            <button onClick={onRetry} className="btn btn-primary">
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
