import { useState } from 'react'
import PreFooter from './assets/componentes/prefooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='componet_prefooter'>
      <PreFooter/>
    </div>
  )
}

export default App
