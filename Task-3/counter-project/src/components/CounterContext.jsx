/* eslint-disable no-unused-vars */
// src/CounterContext.js
import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

// Define initial state
const initialState = {
  count: 0
};

// Define actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Reducer function to handle state changes
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

// Create context
const CounterContext = createContext();

// Create a provider component
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Prop types for CounterProvider
CounterProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure that children are valid React nodes
};

// Custom hook to use the context
export const useCounter = () => {
  return useContext(CounterContext);
};

// Action creators for dispatching actions
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });




