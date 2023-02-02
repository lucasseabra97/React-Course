import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const { counter, showCounter} = useSelector(state => state) 

  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({type: 'increment'})
  };

  const increasetHandler = () => {
    dispatch({type: 'increase', amount: 5})
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'})

  };

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}> increment</button>
        <button onClick={increasetHandler}> Increment by 5</button>
        <button onClick={decrementHandler}> decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
