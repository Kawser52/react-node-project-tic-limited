import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './FrontEnd/Pages/Shared/Header/Header';
import Home from './FrontEnd/Pages/Home/Home';
import Navigation from './FrontEnd/Pages/Shared/Navigation/Navigation';
import About from './FrontEnd/Pages/About/About';
import AboutDetails from './FrontEnd/Pages/About/About Details/AboutDetails';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
        <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about-us' element={<AboutDetails></AboutDetails>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
