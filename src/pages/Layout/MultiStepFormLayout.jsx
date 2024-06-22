import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../SignUp";
import MoreInfoPage from "../MoreInfo";
import ConfirmationPage from "../Confirmation";
import ResultPage from "../Result";

const Layout = () => {
  return (
    <div className="layout">
      <Routes>
        <Route exact path="/" element={<SignUpPage />} />
        <Route path="/more-info" element={<MoreInfoPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/success" element={<ResultPage />} />
        <Route path="/error" element={<ResultPage />} />
      </Routes>
    </div>
  );
};

export default Layout;
