
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../comps/Navbar';
import Main from '../pages/Main';
import About from '../pages/AboutMe';
import Works from '../pages/Works';
import '../App.css';
function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;