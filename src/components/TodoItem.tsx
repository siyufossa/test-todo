import type { Todo } from '../types/todo'
import { formatCreatedAt } from '../utils/todoHelpers'

type Props = {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #ddd', padding: 12 }}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ marginLeft: 10 }}>{todo.text}</span>
        <div><small>{formatCreatedAt(todo.createdAt)}</small></div>
      </div>

      <button type="button" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  )
}
