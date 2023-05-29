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
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

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
            <Route path="/contact" element={<Contact />} /> 
            <Route path="*" element={ <PageNotFound/> } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
