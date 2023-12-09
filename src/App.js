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
import Vision from "./components/Vision";
import Creator from "./components/Creator";

function App() {
  return (
    <div className='App'>
      <Announce/>
      <Router>
          <Navbar  />
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/photography" element={<Photography />} /> */}
            {/* <Route path="/everythingelse" element={<EverythingElse />} /> */}
            <Route path="/creator" element={<Creator />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="*" element={ <PageNotFound/> } />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
