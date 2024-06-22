import React from "react";

const Result = ({ isSuccess, onRetry, onRestart }) => {
  return (
    <div>
      {isSuccess ? (
        <div>
          <h3>Form successfully submitted!</h3>
          <button onClick={onRestart}>Restart</button>
        </div>
      ) : (
        <div>
          <h3>There was an error submitting the form</h3>
          <button onClick={onRetry}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default Result;
