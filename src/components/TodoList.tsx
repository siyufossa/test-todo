import type { Todo } from '../types/todo'
import { TodoItem } from './TodoItem'

type Props = {
  todos: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) {
    return <div>No todos found.</div>
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  )
}
