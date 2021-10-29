import './App.css';
import SearchTodos from './TodoList';
import TodoList from './TodoList';
import SearchUsers from './UserList';
import UserList from './UserList_default';

function App() {
  return (
    <div className='App'>
      <h2>Higher order component</h2>
      <div className='section'>
        <SearchUsers />
        <SearchTodos />
      </div>
    </div>
  );
}

export default App;
