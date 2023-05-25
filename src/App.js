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
      <Navbar/>
      {/* <Projects /> */}
      {/* <Photography/> */}
      <EverythingElse />

    </div>
  );
}

export default App;
