/* eslint-disable no-unused-vars */
// src/components/Counter.js
import React from "react";
import { useCounter, increment, decrement, reset } from "./CounterContext";
import PropTypes from "prop-types";

const Counter = () => {
  const { state, dispatch } = useCounter();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {state.count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

// PropTypes validation
Counter.propTypes = {
  state: PropTypes.shape({
    count: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Counter;










