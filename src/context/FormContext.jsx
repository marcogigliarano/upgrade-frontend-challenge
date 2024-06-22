import React, { createContext, useContext } from "react";
import { useFormSteps } from "../hooks/useFormSteps";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const formSteps = useFormSteps({
    name: "",
    email: "",
    password: "",
    color: "",
    terms: false,
  });

  return (
    <FormContext.Provider value={formSteps}>{children}</FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
