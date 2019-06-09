import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies.jsx';
import Customers from './components/customer';
import MoviesForm from './components/moviesForm'
import NotFound from './components/notfound';
import Rentals from './components/Rentals.jsx';
import NavBar from './components/navbar';
import './App.css';
import Register from './components/loginform';

function App() {
  return (
    <React.Fragment>
      <NavBar />
        <main className="container">
        <Switch>
          <Route path="/Register" component={Register}/>
          <Route path="/movies/:id" component={MoviesForm}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/customers" component={Customers}/>
          <Route path="/rentals" component={Rentals}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect from="/" exact to="/movies"/>
          <Redirect to="/not-found" />
        </Switch>
      </main>
     </React.Fragment>
  );
}

export default App;
