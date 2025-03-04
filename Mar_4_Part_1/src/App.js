import logo from './logo.svg';
import './App.css';
import RefEx1 from './components/RefEx1/refEx1';
import RefEx2 from './components/RefEx2/refEx2';
import UseMem1 from './components/Memo1/useMem1';
import UseMemo2 from './components/Memo2/useMemo2';
import UseMemo3 from './components/Memo3/useMemo3';
import ContextEx1 from './components/ContextEx1/contextEx1';
import ContextEx2 from './components/ContextEx2/contextEx2';
import ThemeContextEx1 from './components/ThemeContextEx1/themeContextEx1';
import UserShow from './components/UserShow/userShow';

function App() {
  return (
    <div className="App">
      <RefEx1 />
      <br/>
      <RefEx2 />
      <br/>
      <UseMem1 /> 
      <br/>
      <UseMemo2 /> 
      <br/>
      <UseMemo3 />
      <hr/>
      <ContextEx1 /> 
      <hr/>
      <ContextEx2 />
      <hr/>
      <ThemeContextEx1 />
      <hr/>
      <UserShow />
    </div>
  );
}

export default App;
