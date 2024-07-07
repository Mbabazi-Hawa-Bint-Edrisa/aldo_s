// import logo from './logo.svg';
import './App.css';
import Navbar from './components/pages/Navbar';
import ContactUs from './components/pages/Contact';
import AboutUs from './components/pages/About';
import HomePage from './components/pages/Home';
import Booking from './components/pages/Booking';
import Payments from './components/pages/Payments';
import Notifications from './components/pages/Notifications';
import TravelPackages from './components/pages/TravelPackages';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src ></img>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <h1></h1>
      <HomePage/>
      <h1></h1>
      <Navbar/>
      <h1></h1>
      <ContactUs/>
      <h1></h1>
      <AboutUs/>
      <h1></h1>
      <Notifications/>
      <h1></h1>
      <TravelPackages/>
      <h1></h1>
      <Booking/>
      <h1></h1>
      <Payments/>
    </div>
  );
}

export default App;
