
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/comps/Navbar';
import Main from '../src/pages/Main';
import About from '../src/pages/AboutMe';
import Works from '../src/pages/Works';
import '../src/App.css';
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