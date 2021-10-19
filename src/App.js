import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appointment/Appointment/Appointment";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import BookAppointment from "./components/Home/BookAppoinment/BookAppointment";
import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Services/Services";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./Contexts/AuthProvider";
import Login from "./Login/Login/Login";
import PrivateRoute from "./Login/Login/PrivateRoute/PrivateRoute";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/bookapointment'>
              <AppointmentForm></AppointmentForm>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/appointment/:appointmentId'>
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
