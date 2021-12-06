import './App.css';
import { Header } from './components/Header/Header.js';
import { Login } from './components/Login/Login.js';
import { Register } from './components/Register/Register.js';
import { Home } from './components/Home/Home.js';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
