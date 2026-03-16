import type { Todo, TodoFilter } from '../types/todo'

export function filterTodos(todos: Todo[], filter: TodoFilter) {
  if (filter === 'active') {
    return todos.filter((t) => !t.completed)
  }

  if (filter === 'completed') {
    return todos.filter((t) => t.completed)
  }

  return todos
}

export function formatCreatedAt(value: string) {
  return new Date(value).toLocaleString()
}

export function countCompletedTodos(todos: Todo[]) {
  return todos.filter((item) => item.completed).length
}
