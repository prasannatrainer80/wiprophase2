import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import ButtonEx from './components/buttonex/ButtonEx';
import Four from './components/four/four';
import Five from './components/five/five';
import Counter from './components/counter/counter';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
      
     Welcome to Functional Components...Trainer Prasanna <br/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third firstName="Ajay" lastName="Kandagatla" company="Wipro" />} /> 
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} /> 
        <Route path="/buttonex" element={<ButtonEx />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
     {/* <First /> <br/>
     <Second /> <br/>
     <Third firstName="Ajay" lastName="Kandagatla" company="Wipro" /> <br/> 
     <Four />
     <ButtonEx /> <hr/>
     <Five /> <br/>
     <Counter /> */}
    </div>
  );
}

export default App;
