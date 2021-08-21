import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from 'react-router-dom';
import Navbar from './Componets/Navbar'
import Home from './Componets/Home/Home'
import Covid from './Componets/Covidallover/Covid';
import Statewise from './Componets/AStatewise/Statewise';
import FindCenter from './Search/Search/FindCenter'
import Footer from './Componets/Footer';

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/covid' component={Covid}></Route>
        <Route exact path='/state' component={Statewise}></Route>
        <Route exact path='/center' component={FindCenter}></Route>
      </Switch>
      <Footer />
    </>
      
    
  );
}

export default App;
