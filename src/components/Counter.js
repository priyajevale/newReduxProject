import classes from './Counter.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Counter = () => {
    const dispatch=useDispatch();
    const counter=useSelector(state=>state.counter)
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={(e) => dispatch({type:'increment'})}>Increment</button>
        <button onClick={(e) => dispatch({type:'decrement'})}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;