import { useMemo, useState } from 'react'
import { TodoInput } from './components/TodoInput'
import { TodoFilters } from './components/TodoFilters'
import { TodoList } from './components/TodoList'
import { useTodos } from './hooks/useTodos'
import { countCompletedTodos, filterTodos } from './utils/todoHelpers'
import type { TodoFilter } from './types/todo'

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos()
  const [filter, setFilter] = useState<TodoFilter>('all')

  const filteredTodos = useMemo(() => {
    return filterTodos(todos, filter)
  }, [todos, filter])

  const completedCount = countCompletedTodos(todos)
  const activeCount = todos.length - completedCount

  const t = todos.filter((x) => !x.completed)

  return (
    <div style={{ maxWidth: 720, margin: '40px auto', fontFamily: 'Arial' }}>
      <h1>TODO Review Test</h1>

      <TodoInput onAddTodo={addTodo} />

      <div style={{ display: 'flex', gap: 16 }}>
        <div>Total: {todos.length}</div>
        <div>Active: {activeCount}</div>
        <div>Completed: {completedCount}</div>
        <div>Duplicate calc: {t.length}</div>
      </div>

      <TodoFilters value={filter} onChange={setFilter} />

      <button onClick={clearCompleted}>Clear completed</button>

      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}
