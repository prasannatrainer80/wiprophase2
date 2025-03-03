import logo from './logo.svg';
import './App.css';
import UserShow from './components/UserShow/userShow';
import EmployShow from './components/EmployShow/employShow';
import UserSearch from './components/UserSearch/userSearch';
import EmploySearch from './components/EmploySearch/employSearch';
import EmployInsert from './components/EmployInsert/employInsert';

function App() {
  return (
    <div className="App">
     <UserShow /> <hr/>
     <EmployShow /> <hr/>
     <UserSearch /> <hr/>
     <EmploySearch /> <hr/>
     <EmployInsert />
    </div>
  );
}

export default App;
