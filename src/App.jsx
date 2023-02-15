import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import ProjectDisplay from './pages/projectDisplay';
import Experience from './pages/experience';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes basename='/moival'>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
