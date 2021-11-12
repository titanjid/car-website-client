
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Explore from './pages/explore/Explore';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './pages/Auth/AuthProvider';
import LogIn from './pages/LogIn/LogIn';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import SingleCar from './pages/singleCar/SingleCar';
import SingleCars from './pages/singleCar/SingleCars';
import Dashboard  from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/explore">
          <Explore></Explore>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute exact path="/singleCar/:carId">
          <SingleCar></SingleCar>
        </PrivateRoute>
        <PrivateRoute  path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute  path="/singleCars/:carsId">
          <SingleCars></SingleCars>
        </PrivateRoute>
        <Route exact path="/login">
          <LogIn></LogIn>
        </Route>
        <Route  path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
