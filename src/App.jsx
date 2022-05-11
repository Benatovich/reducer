import './App.css'
import { ContextProvider } from './context/ContextProvider'
import Counter from './components/Counter/Counter'

function App() {
  return (
  <ContextProvider>
    <Counter />
  </ContextProvider>
  )
}

export default App
