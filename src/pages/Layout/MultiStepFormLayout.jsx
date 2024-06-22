import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignUpPage from "../SignUp";
import MoreInfoPage from "../MoreInfo";
import ConfirmationPage from "../Confirmation";
import ResultPage from "../Result";
import { useFormContext } from "../../context/FormContext";

const Layout = () => {
  const { formData } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    const { name, email, password, color, terms } = formData;
    const pathname = window.location.pathname;

    if (pathname === "/more-info" && (!name || !email || !password)) {
      navigate("/");
    } else if (
      pathname === "/confirmation" &&
      (!name || !email || !password || !color || terms === undefined)
    ) {
      navigate("/");
    }
  }, [formData, navigate]);
  return (
    <div className="layout container">
      <main className="d-flex justify-content-center">
        <Routes>
          <Route exact path="/" element={<SignUpPage />} />
          <Route path="/more-info" element={<MoreInfoPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/success" element={<ResultPage />} />
          <Route path="/error" element={<ResultPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
