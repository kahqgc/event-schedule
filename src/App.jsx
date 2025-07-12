import { HashRouter as Router, Routes, Route } from 'react-router'
import Home from "./pages/Home";
import About from './pages/About';
import Schedule from './pages/Schedule'
import './App.css';

function App() {

  return (
    <>
      <div id="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/About" element={<About />} />
            <Route path="/pages/Schedule" element={<Schedule />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
