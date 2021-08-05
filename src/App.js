import './App.css';
import InputData from './components/InputData';
import Paper from './components/paper';
import React from "react";  
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom';                                                                                                                                                                 
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <InputData />
      </Route>
      <Route exact path="/print">   
        <Paper/>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
