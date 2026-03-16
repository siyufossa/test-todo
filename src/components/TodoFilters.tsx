import type { TodoFilter } from '../types/todo'

type Props = {
  value: TodoFilter
  onChange: (value: TodoFilter) => void
}

export function TodoFilters({ value, onChange }: Props) {
  const options: TodoFilter[] = ['all', 'active', 'completed']

  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          style={{
            padding: '8px 12px',
            border: '1px solid #ccc',
            background: value === option ? '#eee' : '#fff',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
