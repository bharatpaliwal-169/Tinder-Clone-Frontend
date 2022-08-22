import React from 'react';
import { BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import Flash from './components/FlashScreen';
import Landing from './pages/Landing';
import Auth from './pages/Auth'
import Login from './pages/Login';

const App = () => {
  return(
    <>
      <Router>
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/auth" exact component={Auth}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/flash" exact component={Flash}></Route>
          </Switch>
      </Router>
    </>
  )
}
export default App;