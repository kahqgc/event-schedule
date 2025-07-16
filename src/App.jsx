import { HashRouter as Router, Routes, Route } from 'react-router'
import Home from "./pages/Home";
import About from './pages/About';
import Schedule from './pages/Schedule'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {


  return (
    <>
        <Router>
          <div id="app">
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pages/About" element={<About />} />
                <Route path="/pages/Schedule" element={<Schedule />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
    </>
  )
}

export default App
