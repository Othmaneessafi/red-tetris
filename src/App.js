import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Game from './components/Game'
import Logo from './components/Logo'

function App() {
  return (
    <div className="App">
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
