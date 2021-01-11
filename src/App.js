//import './App.css';
import Navbar from './Components/Navbar.js'
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <NavLink to="/"></NavLink>
          <NavLink to="/Profile"></NavLink>
          <NavLink to="/Friends"></NavLink>
          <NavLink to="/Messages"></NavLink>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
