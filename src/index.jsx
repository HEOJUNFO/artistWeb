import './style.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar.jsx'; 
import HomePage from './HomePage.jsx'
import Home from './home/Home.jsx';
import Overlay from './home/Overlay.jsx';
import { AuditionsAnnouncements } from './page/AuditionsAnnouncements.jsx';
import { AuditionDetail } from './page/AuditionDetail.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <BrowserRouter>
   <NavBar/> 
    <Routes>
      <Route path="/" element={
        <>
        <HomePage/>

        </>
      } />
      <Route path="/auditions" element={
        <AuditionsAnnouncements />
      } />
        <Route path="/auditions/:auditionId" element={<><AuditionDetail />
        <Home/><Overlay />
        </>} />
         
    </Routes>
  </BrowserRouter>
);