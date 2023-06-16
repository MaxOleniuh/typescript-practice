import { useState, useEffect } from 'react';
import { Card, CardVariant } from './components/Card';
import { IUser, ITodo } from './types/types';
import axios from 'axios';
import UserItem from './components/UserItem';
import List from './components/List';
import TodoItem from './components/TodoItem';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }
  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <Card variant={CardVariant.primary} width='200px' height='200px'>
            <button>Click</button>
      </Card> 
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </>
  )
}

export default App;