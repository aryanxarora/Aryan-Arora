import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './styles/App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Announce from './components/Announce';
import Photography from './components/Photography';
import EverythingElse from './components/EverythingElse';

function App() {
  return (
    <div className='App'>
      <Announce/>
      <Router>
        <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/everythingelse" element={<EverythingElse />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
