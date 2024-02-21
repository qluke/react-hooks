"use client";

import React, { useReducer } from "react";
const init = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function TestReducer() {
  const [state, dispatch] = useReducer(reducer, init);
  return (
    <div>
      count: {state.count}
      <ul>
        <li>
          <button onClick={() => dispatch({ type: "add" })}>+</button>
        </li>
        <li>
          <button onClick={() => dispatch({ type: "minus" })}>-</button>
        </li>
      </ul>
    </div>
  );
}

export default TestReducer;
