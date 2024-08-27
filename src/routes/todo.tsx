import { createFileRoute } from '@tanstack/react-router';
import { FormEvent, useEffect, useState } from 'react';
import Card from '../components/Card';

export const Route = createFileRoute('/todo')({
  component: () => <Todos />,
});

type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const jsonTodos = localStorage.getItem('todo');
    console.log(jsonTodos);
    setTodos(jsonTodos ? JSON.parse(jsonTodos) : []);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo) return;

    const newTodoObj = {
      id: Math.random() * 1000,
      text: newTodo,
      completed: false,
    };
    const newList = [...todos, newTodoObj].sort((a, b) => (a.completed > b.completed ? 1 : -1));
    setTodos(newList);
    localStorage.setItem('todo', JSON.stringify(newList));
    setNewTodo('');
  };

  const checkTodo = (id: number) => () => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    newTodos.sort((a, b) => (a.completed > b.completed ? 1 : -1));
    localStorage.setItem('todo', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todo', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
    <Card title="Todo List">
      <>
        <ul>
          {todos.map((todo) => (
            <div className="flex justify-between border-b p-2">
              <div>
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={checkTodo(todo.id)}
                />
                <span>{todo.text}</span>
              </div>
              <button className="bg-red-500" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="mt-4 py-8">
          <label className="text-lg" htmlFor="newTodo">
            Add a Todo
          </label>
          <div className="flex w-full justify-between">
            <input
              type="text"
              id="newTodo"
              name="newTodo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="mr-2 flex-1 border"
            />
            <button>Add Todo</button>
          </div>
        </form>
      </>
    </Card>
  );
};
