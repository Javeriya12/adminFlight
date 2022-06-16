
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Booking from './UserBooking/BookingList';
import AddFlight from './AddFlight/AddFlightPage';
import HomePage from './Home/HomePage';
import SignUPPage from './signup/signUpPage';
import LoginPage from './Login/LoginPage';
import PageNotFound from './404/pagenotfound';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<SignUPPage/>}/>
     <Route path='/login' element={<LoginPage/>}/>
      <Route path='/view' element={<Booking/>}/>
      <Route path='/add' element={<AddFlight/>}/>
      <Route path='/Home' element={<HomePage/>}/>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
