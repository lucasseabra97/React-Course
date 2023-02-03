import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const { counter, showCounter} = useSelector(state => state) 

  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };

  const increasetHandler = () => {
    dispatch(counterActions.increase(10))
  };
  
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
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
