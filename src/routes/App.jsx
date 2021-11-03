import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../scss/index.scss";
import { Home } from "../containers/Home";
import { PasswordRecovering } from "../containers/PasswordRecovering";
import { Login } from "../containers/Login";
import { Layout } from "../components/Layout";
import { NotFound } from "../containers/NotFound";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="password-recover" element={<PasswordRecovering />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};
