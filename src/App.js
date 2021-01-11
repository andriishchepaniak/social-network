//import './App.css';
import Navbar from './Components/Navbar.js'
import Navigation from './Components/Navigation.js'
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <Navigation/>
          </div>
          <div className="col-md-6">
            
          </div>
          <div className="col-md-3">
            
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
