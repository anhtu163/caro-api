import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,
     Route,
     Switch 
    } from 'react-router-dom';
import Game from './Game';
import Login from './Login';
import Register from './Register';
import '../style.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>

        <Switch>
        
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/" component={Game}/>
              
        </Switch>  
        
    </Router>
  </Provider>
)



export default Root