import logo from './logo.svg';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Admin from './components/admin';

function App() {
  return (
    <div className="App">
      <Register /> <br/><hr/>
      <Login /> <br/><hr/>
      <Admin />
    </div>
  );
}

export default App;
