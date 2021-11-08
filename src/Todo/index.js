import { useReducer, useRef } from 'react';
import { addTodo, removeTodo, setTodo } from './actions';
import logger from './logger';
import reducer, { initState } from './reducer';

function Todo() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { todo, todos } = state;
  const inputRef = useRef();

  const hanldeSubmit = () => {
    dispatch(addTodo(todo));
    dispatch(setTodo(''));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: '0 20px', fontSize: 20 }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => dispatch(setTodo(e.target.value))}
        type='text'
        placeholder='Enter todo...'
      />
      <button onClick={hanldeSubmit}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span onClick={() => dispatch(removeTodo(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
