import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/todos'>Todos</NavLink>
      </div>
      <Routes>
        <Route path={'/users'} element={<UsersPage />} />
        <Route path={'/todos'} element={<TodosPage />} />
        <Route path={'/todos/:id'} element={<TodoItemPage />} />
        <Route path={'/users/:id'} element={<UserItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;