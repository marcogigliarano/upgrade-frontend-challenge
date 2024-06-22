import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFormSteps = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetFormData = () => {
    setFormData(initialValues);
  };

  const goTo = (path) => {
    navigate(path);
  };

  return {
    formData,
    updateFormData,
    resetFormData,
    goTo,
  };
};
