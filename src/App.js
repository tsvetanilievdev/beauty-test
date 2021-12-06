import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header.js';
import { Login } from './components/Login/Login.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
