// useSelector is a hook from react-redux that allows us to access a specific part of the store managed states.
// connect is used for class components.
// connect is a function that takes in two arguments ;
//    1. function that connects a class based component to the store based state.
//    2. function that connects the class based component to the dispatch.
import { useSelector, useDispatch, connect } from 'react-redux'

import classes from './Counter.module.css'
import { counterAction } from './store/index'

const Counter = () => {
  /**
   * useSelector takes in a function argument.
   * The function arguement takes in an argument of the state and returns a part of that state.
   *
   * This will automatically set up a subscription for this component. The component will be automatically
   * updated when the state in the store changes.
   */
  const counter = useSelector(state => state.counter)

  // useDispatch is a hook that returns a function
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {}

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
    dispatch(counterAction.increment())
  }

  const incrementByHandler = () => {
    dispatch({
      type: 'increaseBy',
      value: 10
    })
    dispatch(
      // The 10 value will be automatically added to the payload value
      counterAction.incrementBy(10)
    )
  }

  const decrementHandler = () => {
    console.log('Decrement clicked')
    dispatch({ type: 'decrement' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByHandler}>Increase By</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
