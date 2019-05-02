import React, { Component } from 'react';
import './App.css';
import StoreData from './Component/StoreData'
import UploadData from './Component/UploadData'
import {connect} from 'react-redux'
import {Provider} from 'react-redux'
import store from './Redux/Store'
import {BrowserRouter, Route,Link} from 'react-router-dom';

class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       InstaList:[], 
     }

   }
    render() {
      return (
        <BrowserRouter>
        <Provider store={store}>
        <div className="App">
        <div className="upload-link">
        <Link to="/upload">Upload new image here</Link>
        </div>
        <Route path="/" exact render = {() => { return <StoreData/>}}></Route>
        <Route path="/upload" exact render = {() => { return <UploadData/>}}></Route>       
        
        </div> 
        </Provider> 
        </BrowserRouter> 
        
      );
    }
     
}

export default App;
