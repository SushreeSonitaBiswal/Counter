/* eslint-disable no-unused-vars */
// src/App.jsx
import React from "react";
import { CounterProvider } from "./components/CounterContext";
import Counter from "./components/Counter";

function App() {
  console.log("Rendering App component");

  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;




