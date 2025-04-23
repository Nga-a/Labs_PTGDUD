import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

export default function CounterUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h3>useReducer</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}