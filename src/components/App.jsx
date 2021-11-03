import React from "react";
import "../scss/index.scss";
import { Layout } from "./Layout";
import { Login } from "./Login";

export const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};
