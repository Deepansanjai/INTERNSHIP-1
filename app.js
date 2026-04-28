import React from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Internship Project 🚀</h1>

      <Weather />
      <Form />
    </div>
  );
}

export default App;