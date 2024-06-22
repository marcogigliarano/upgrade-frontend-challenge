import React from "react";
import MoreInfoForm from "../../components/MoreInfoForm";
import { useFormContext } from "../../context/FormContext";
import { useFetchColors } from "../../hooks/useFetchColors";

const MoreInfoPage = () => {
  const { formData, updateFormData, goTo } = useFormContext();
  const { data: colors, isLoading, isError } = useFetchColors();

  const handleSubmit = (data) => {
    updateFormData(data);
    goTo("/confirmation");
  };

  const handleBack = () => {
    goTo("/");
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load colors</p>;

  return (
    <MoreInfoForm
      initialValues={formData}
      colors={colors}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
};

export default MoreInfoPage;
