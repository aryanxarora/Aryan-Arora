import './styles/App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Announce from './components/Announce';

function App() {
  return (
    <div className='App'>

      <Announce/>
      <Navbar/>
      <Projects/>

    </div>
  );
}

export default App;
