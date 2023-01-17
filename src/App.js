import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>To-do App</h1>
      <Form/>
      <Todos />
    </div>
  );
}

export default App;
