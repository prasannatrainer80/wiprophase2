import logo from './logo.svg';
import './App.css';
import EmployShow from './components/EmployShow/employShow';
import EmploySearch from './components/EmploySearch/employSearch';
import EmployInsert from './components/EmployInsert/employInsert';

function App() {
  return (
    <div className="App">
      <EmployShow /> <br/><br/>
      <EmploySearch /> <br/><hr/>
      <EmployInsert />
    </div>
  );
}

export default App;
