import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import CreamContainer from './components/CreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import BeverageContainer from './components/BeverageContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <CakeContainer />
        <CreamContainer />
        <BeverageContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;

//Redux Axios Middleware
//Redux Persist
