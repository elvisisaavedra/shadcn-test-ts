import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>

      <Button variant={'secondary'}>Secondary</Button>

      <Button asChild variant={'link'}>
        <a href='#'>Link</a>
      </Button>
    </>
  )
}

export default App
