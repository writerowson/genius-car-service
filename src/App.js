import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home/Home';
import About from './components/Pages/About/About';
import Services from './components/Pages/Home/Services/Services';
import Footer from './components/Pages/Footer/Footer';
import ServiceDetail from './components/Pages/ServiceDetail/ServiceDetail';
import NotFound from './components/Pages/Header/NotFound/NotFound';
import Login from './components/Pages/LogIn/Login';
import Register from './components/Pages/LogIn/Register';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div >
  );
}

export default App;
