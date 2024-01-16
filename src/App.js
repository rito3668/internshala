import './App.css';
import FAQ from './components/FAQ';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <h1 className='text-left ml-[180px] mt-11 text-xl font-bold text'>Relations and Functions(Mathematics)</h1>
      <Menu/>
      <Slider/>
      <FAQ/>
    </div>
  );
}

export default App;
