import { createStore } from "redux";


const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    default:
      return state; 
  }
};

const initialState = {
  counter: 0, 
};

const store = createStore(reducers);

export default store;