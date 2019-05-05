import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import Home from './containers/home';
import Events from './containers/events';
import HOF from './containers/hof';
import Form from './containers/form';
import Admin from './containers/admin';

const App = () => (
  <BrowserRouter>
    <div id="headerdiv">
      <Header />
    </div>
  
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/hof' component={HOF}/>
      <Route path='/events' component={Events}/>
      <Route path='/form' component={Form}/>
      <Route path='/admin' component={Admin}/>
      <Redirect from='*' to='/' />
    </Switch>

    <Footer />
     
  </BrowserRouter>


  
)

export default App;
