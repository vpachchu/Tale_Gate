import './App.css';
import './assests/css/global.css'
import NavBar from './components/Navbar';
import Home from './components/Pages/Home';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
