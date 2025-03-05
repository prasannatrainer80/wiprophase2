import logo from './logo.svg';
import './App.css';
import AccountCreate from './components/AccountCreate/accountCreate';
import DepositAccount from './components/DepositAccount/depositAccount';

function App() {
  return (
    <div className="App">
    <AccountCreate />
    <br />
    <DepositAccount />
    </div>
  );
}

export default App;
