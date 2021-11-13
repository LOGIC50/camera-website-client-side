// import logo from './logo.svg';
import './App.css';
// import { Typography } from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Navbar from './Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
// import Footer from './Pages/Home/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExpolreProducts from './Pages/ExploreProducts/ExpolreProducts';
// import Register from './Pages/Login/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        {/* <Navbar></Navbar> */}
      <div>
        <Switch>
          <PrivateRoute path="/exploreCamera">
           <ExpolreProducts></ExpolreProducts>
          </PrivateRoute>
          <PrivateRoute path="/purchase/:productId">
          <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/login">
           <Login></Login>
          </Route>
          <Route exact path="/register">
           <Register></Register>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      </AuthProvider>
    {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
