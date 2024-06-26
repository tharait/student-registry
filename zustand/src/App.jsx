import './App.css'
import Parent from './components/Parent'
import Child from './components/Child'
import GrandChild from './components/GrandChild'

function App() {

  return (
    <>
      <h1>Zustand</h1>

      <Parent>
        <Child name="A">
          <GrandChild name="AA" />
          <GrandChild name="AB" />
        </Child>
      </Parent>
    </>
  )
}

export default App
