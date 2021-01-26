//import './App.css';
import Navbar from './Components/Navbar.js'
import Navigation from './Components/Navigation/Navigation.js'
import DialogsContainer from './Components/Dialogs/DialogsContainer.js'
import {BrowserRouter, Route} from 'react-router-dom'
import Profile from './Components/Profile/Profile.js'
import NewsContainer from './Components/News/NewsContainer.js'
import UsersContainer from './Components/Users/UsersContainer.js'
import FriendsContainer from './Components/Friends/FriendsContainer.js'



const App = (props) => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <Navigation/>
            
          </div>
          <div className="col-md-7">
            <Route path="/news" render={() => <NewsContainer />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/friends" render={() => <FriendsContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
          </div>
          <div className="col-md-2">
            
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
