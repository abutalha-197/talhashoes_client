import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explores from "./Pages/Explore/Explores/Explores";
import Home from './Pages/Home/Home/Home';
import LogIn from "./Pages/LogIn/LogIn/LogIn";
import PrivateRoute from "./Pages/LogIn/PrivateRoute/PrivateRoute";
import Register from "./Pages/LogIn/Register/Register";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>

            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explores></Explores>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/products/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
