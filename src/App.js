import './App.css';
import Bank from './components/Bank';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Bank/>
      </div>
    </div>
  );
}

export default App;

