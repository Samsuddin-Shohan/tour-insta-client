import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Hotels from './components/Hotels';
import Booking from './components/Booking';
import AdminDashboard from './components/dashboard/AdminDashboard';
import UserDashBoard from './components/dashboard/UserDashboard';
import HotelDashboard from './components/dashboard/HotelDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element = {<Home></Home>}><Route></Route>
           </Route>
           <Route path='/home' element = {<Home></Home>}></Route>
           <Route path='/login' element = {<Login></Login>}></Route>
           <Route path='/registration' element = {<Registration></Registration>}></Route>
           <Route path='/hotels' element = {<Hotels></Hotels>}></Route>
           <Route path='/booking' element = {<Booking></Booking>}></Route>
           <Route path='/admindashboard' element = {<AdminDashboard></AdminDashboard>}></Route>
           <Route path='/userdashboard' element = {<UserDashBoard></UserDashBoard>}></Route>
           <Route path='/hoteldashboard' element = {<HotelDashboard></HotelDashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
