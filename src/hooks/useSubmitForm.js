import { useMutation } from "@tanstack/react-query";

const submitForm = async (formData) => {
  console.log("formData", formData);
  const response = await fetch("http://localhost:3001/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  console.log("response", response);
  if (!response.ok) {
    throw new Error("Failed to submit form");
  }
  return response;
};

export const useSubmitForm = () => {
  return useMutation({
    mutationFn: submitForm,
  });
};
