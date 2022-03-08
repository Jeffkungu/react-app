import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  isToggle: false
}

// NB : we always have to return a new snapshop of state since Objects and Arrays are reference types.
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      isToggle: false
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      isToggle: false
    }
  }

  if (action.type === 'increaseBy') {
    return {
      counter: state.counter + action.value,
      isToggle: false
    }
  }

  return state
}

/**
 * createSlice replaces the reducer function with the several action conditions replaced by methods
 *
 * the functions in the reducers property can return a mutated versuon of the state because
 * readuxtoolkit creates a new snapshot of the state in the background.
 *
 *
 */
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
    increaseBy (state, action) {
      // The payload is a property automatically added to the action variable
      state.counter = state.counter + action.payload
    }
  }
})

// We can add more slices in the reducer valuer defined below
const store1 = configureStore({
  reducer: {
    'name of reducer': 'reducer of yur choice',
    counter: counterSlice.reducer
  }
})

// after creating the slice object we can get specific actions by calling the actions function
// The actions function returns a slice object with the different actions defined in the reducer property in the slice object
export const counterAction = counterSlice.actions

/**
 * after creating one slice we can pass it to the store as slice.reducer
 * for multiple slices we use cofigureStore instead of createStore
 */
const store = createStore(counterReducer)

export default store
