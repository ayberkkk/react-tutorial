import { createStore, combineReducers } from "redux";
import CounterReducer from "./stores/reducers/counter";

const reducers = combineReducers({
  counter: CounterReducer,
});

const store = createStore(reducers);

export default store;
