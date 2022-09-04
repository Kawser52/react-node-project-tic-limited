import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './FrontEnd/Pages/Shared/Header/Header';
import Home from './FrontEnd/Pages/Home/Home';
import Navigation from './FrontEnd/Pages/Shared/Navigation/Navigation';
import About from './FrontEnd/Pages/About/About';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
        <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
