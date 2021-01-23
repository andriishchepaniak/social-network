//import './App.css';
import Navbar from './Components/Navbar.js'
import Navigation from './Components/Navigation/Navigation.js'
import News from './Components/News/News.js'
import Dialogs from './Components/Dialogs/Dialogs.js'
import {BrowserRouter, Route} from 'react-router-dom'
import Profile from './Components/Profile/Profile.js'


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
            <Route path="/news" render={() => <News posts={props.state.newsPage.newsData}/>} />
            <Route path="/profile" render={() => <Profile dispatch={props.dispatch} state={props.state.profilePage}/>} />
            <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>} />
          </div>
          <div className="col-md-2">
            
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
