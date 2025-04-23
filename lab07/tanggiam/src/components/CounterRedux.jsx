import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CounterRedux() {
  const count = useSelector((state) => state.legacy);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}