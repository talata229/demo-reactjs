import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState('');
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await res.json();
      setTodos(todos);
      console.log(todos);
    };

    fetchTodos();
  }, []);
  let renderTodos = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

  let filterTodos = todos
    .slice(0, 10)
    .filter(({ title }) => {
      return title.indexOf(term) > -1;
    })
    .map((todo) => {
      return (
        <div key={todo.id}>
          <p>
            <strong>{todo.title}</strong>
          </p>
        </div>
      );
    });

  return (
    <div>
      <h2>Todos</h2>
      <input
        type='text'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>{filterTodos}</div>
    </div>
  );
};

export default TodoList;
