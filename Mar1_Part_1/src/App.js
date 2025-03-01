import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import Login from './components/login/login';
import Calc from './components/calc/calc';

function App() {
  return (
    <div className="App">
      <First /> <br/>
      <Second /> <br/>
      <Third /> <br/>
      <Login /> <br/>
      <Calc />
    </div>
  );
}

export default App;
