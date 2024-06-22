import React from "react";
import SignUpForm from "../../components/SignUpForm";
import { useFormContext } from "../../context/FormContext";

const SignUpPage = () => {
  const { formData, updateFormData, goTo } = useFormContext();

  const handleSubmit = (data) => {
    updateFormData(data);
    goTo("/more-info");
  };

  return <SignUpForm initialValues={formData} onSubmit={handleSubmit} />;
};

export default SignUpPage;
