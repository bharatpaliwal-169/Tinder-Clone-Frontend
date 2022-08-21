import React from 'react';
import { BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import Flash from './components/FlashScreen';
import Landing from './pages/Landing';
import Auth from './pages/Auth'

const App = () => {
  return(
    <>
      <Router>
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/flash" exact component={Flash}></Route>
            <Route path="/test" exact component={Auth}></Route>
          </Switch>
      </Router>
    </>
  )
}
export default App;