import { useState } from 'react'
import type { Todo } from '../types/todo'

const seedData: Todo[] = [
  {
    id: 1,
    text: 'Read onboarding docs',
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    text: 'Clone the repository',
    completed: true,
    createdAt: new Date().toISOString(),
  },
]

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(seedData)

  const addTodo = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id: number) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })

    setTodos(updated)
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  return { todos, addTodo, toggleTodo, deleteTodo, clearCompleted }
}
