import { ADD_TODO, REMOVE_TODO, SET_TODO } from "./constants";

//Init state
export const initState = {
  todo: '',
  todos: [],
};

//Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TODO:
      return {
        ...state,
        todo: payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case REMOVE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(payload, 1);
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
};

export default reducer;