
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter';


function App() {
  
  const { counter } = useSelector( state => state.counter);
  const dispacth = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={ () => dispacth( increment() )}>
          Increment
        </button>
        <button onClick={ () => dispacth( decrement() )}>
          Decrement
        </button>
        <button onClick={ () => dispacth( incrementBy(2) )}>
          increment By 2
        </button>
        
      </div>
      
    </div>
  )
}

export default App
