import classes from './Counter.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { counterActions } from '../Store';

const Counter = () => {
    const dispatch=useDispatch();
    const counter=useSelector(state=>state.counter.counter)
    const show=useSelector(state=>state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
const increseHandler=() =>{
  dispatch(counterActions.increases(10));
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&& <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={(e) => dispatch(counterActions.increment())}>Increment</button>
        <button onClick={increseHandler}>Increases by 10</button>
        <button onClick={(e) => dispatch(counterActions.decrement())}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;