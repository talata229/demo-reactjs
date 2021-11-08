//Actions
import { SET_TODO, ADD_TODO, REMOVE_TODO } from "./constants";
export const setTodo = (todo) => {
  return {
    type: SET_TODO,
    payload: todo,
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
