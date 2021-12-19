import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ExpolreProducts from "./Pages/ExploreProducts/ExpolreProducts";
import ReviewAll from "./Pages/Home/ReviewAll/ReviewAll";

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
              <Route exact path="/reviewAll">
                <ReviewAll></ReviewAll>
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
