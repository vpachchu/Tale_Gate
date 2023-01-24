import './App.css';
import './assests/css/global.css'
import NavBar from './components/Navbar';
// import Home from './components/Pages/Home';
import Stories from './components/Pages/Stories';
function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/> */}
      <Stories/>
    </div>
  );
}

export default App;
