import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home/Home';
import About from './components/Pages/About/About';
import Services from './components/Pages/Home/Services/Services';
import Footer from './components/Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* {/* <Route path='/' element={<Home></Home>}></Route> */}
        {/* <Route path='/services' element={<Services></Services>}></Route> */}
        {/* <Route path='/' element={<Home></Home>}></Route> */}

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
