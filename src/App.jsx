import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route exact path='/moival' element={<Home />} />
          <Route exact path='/moival/projects' element={<Projects />} />
          <Route path='/moival/project/:id' element={<ProjectDisplay />} />
          <Route exact path='/moival/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
