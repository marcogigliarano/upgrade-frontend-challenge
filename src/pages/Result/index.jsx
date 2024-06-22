import React from "react";
import { useFormContext } from "../../context/FormContext";
import Result from "../../components/Result";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const { goTo } = useFormContext();
  const location = useLocation();
  const isSuccess = location.pathname === "/success";

  const handleRetry = () => {
    goTo("/");
  };

  const handleRestart = () => {
    goTo("/");
  };

  return (
    <Result
      isSuccess={isSuccess}
      onRetry={handleRetry}
      onRestart={handleRestart}
    />
  );
};

export default ResultPage;
