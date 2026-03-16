import { useState } from 'react'

type Props = {
  onAddTodo: (value: string) => void
}

export function TodoInput({ onAddTodo }: Props) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a task"
        style={{ flex: 1, padding: 10 }}
      />
      <button type="submit">Add</button>
    </form>
  )
}
