import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

export default function CounterToolkit() {
  const count = useSelector((state) => state.toolkit.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Toolkit</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}