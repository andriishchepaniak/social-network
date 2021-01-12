//import './App.css';
import Navbar from './Components/Navbar.js'
import Navigation from './Components/Navigation/Navigation.js'
import News from './Components/News/News.js'
import Dialogs from './Components/Dialogs/Dialogs.js'
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'
import Profile from './Components/Profile/Profile.js'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <Navigation/>
          </div>
          <div className="col-md-7">
            <Route path="/news" component={News} />
            <Route path="/profile" component={Profile} />
            <Route path="/dialogs" component={Dialogs} />
          </div>
          <div className="col-md-2">
            
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
