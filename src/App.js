import './App.css';

import React from 'react';
import { Route , Switch} from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import HatsPage from './hats';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOutPage from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {

  constructor() {
    super();

    this.state= {
      currentUser: null
    }
  }
unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })

    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
      <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact  path='/' component={HomePage}/>
            <Route  path='/hats' component={HatsPage}/>
            <Route  path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignOutPage}/>
          </Switch>
  
      </div>
    );
  }

}

export default App;
