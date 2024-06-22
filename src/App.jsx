// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormProvider } from "./context/FormContext";
import Layout from "./pages/Layout/MultiStepFormLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <FormProvider>
        <Layout />
      </FormProvider>
    </Router>
  </QueryClientProvider>
);

export default App;
