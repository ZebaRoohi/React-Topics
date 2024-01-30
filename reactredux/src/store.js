/*import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/counter/counterSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;*/

// store.js of todos
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './components/todos/todosSlice';
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
export default store;