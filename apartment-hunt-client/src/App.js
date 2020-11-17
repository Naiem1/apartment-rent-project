import React from 'react';
import './App.scss';
import '../src/style/style.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
      <Router>
         <Switch>
           <Route path ="/home">
               <Home></Home>
           </Route>
           {/* <Route path="/login">
               <Login></Login>
           </Route> */}
           {/* <Route path="/admin">
                <Admin></Admin>
           </Route> */}
           {/* <PrivateRoute path="/events">
              <EventPage></EventPage>
           </PrivateRoute> */}
           {/* <Route path="/delete/:id">
              <Delete></Delete>
           </Route> */}
           {/* <PrivateRoute path="/booking/:bookingPlaceId">
               <BookingDetail></BookingDetail>
           </PrivateRoute> */}
           {/* <PrivateRoute path="/:id">
               <Registration></Registration>
           </PrivateRoute> */}
           <Route exact path="/">
               <Home></Home>
           </Route>
           <Route path="*">
               <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>
  );
}

export default App;