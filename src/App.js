import './styles/App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Announce from './components/Announce';
import Photography from './components/Photography';

function App() {
  return (
    <div className='App'>

      <Announce/>
      <Navbar/>
      <Projects />
      <Photography/>

    </div>
  );
}

export default App;
