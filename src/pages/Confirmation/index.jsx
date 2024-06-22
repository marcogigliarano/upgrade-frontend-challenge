import React from "react";
import ConfirmationForm from "../../components/ConfirmationForm";
import { useFormContext } from "../../context/FormContext";
import { useSubmitForm } from "../../hooks/useSubmitForm";

const ConfirmationPage = () => {
  const { formData, goTo } = useFormContext();
  const { mutate, isLoading } = useSubmitForm();

  const handleSubmit = () => {
    mutate(formData, {
      onSuccess: () => {
        goTo("/success");
      },
      onError: (error) => {
        console.log(error);
        //goTo("/error");
      },
    });
  };

  const handleBack = () => {
    goTo("/more-info");
  };

  return (
    <ConfirmationForm
      formData={formData}
      onSubmit={handleSubmit}
      onBack={handleBack}
      loading={isLoading}
    />
  );
};

export default ConfirmationPage;
