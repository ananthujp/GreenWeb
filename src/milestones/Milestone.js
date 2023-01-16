import React from "react";
import App from "./App";
import { AuthProvider } from "./Auth";

function Milestones() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default Milestones;
