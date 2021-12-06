import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header.js';
import { Login } from './components/Login/Login.js';
import { Register } from './components/Register/Register.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Register />
    </div>
  );
}

export default App;
