import './style.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar.jsx'; 
import HomePage from './HomePage.jsx'
import Home from './home/Home.jsx';
import Overlay from './home/Overlay.jsx';
import { AuditionsAnnouncements } from './page/AuditionsAnnouncements.jsx';
import { AuditionDetail } from './page/AuditionDetail.jsx';
import SubmitAuditionForm from './page/SubmitAuditionForm';
import { MentoringPage } from './page/MentoringPage.jsx';
import { Announcement } from './page/Announcement.jsx';
import { CooperationPage } from './page/CooperationPage.jsx';
import { BuysellgPage } from './page/BuysellPage.jsx';
import { FreePage } from './page/FreePage.jsx';
import { PromotionPage } from './page/PromotionPage.jsx';
import ScrollTop from './scrollTop.jsx';


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <BrowserRouter>
   <ScrollTop/>
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
        <Route path="/mentoring" element={
        <MentoringPage />
      } />
       <Route path="/announcement" element={
        <Announcement />
      } />
        <Route path="/promotion" element={
        <PromotionPage />
      } />
          <Route path="/cooperation" element={
        <CooperationPage />
      } />
         <Route path="/buysell" element={
        <BuysellgPage />
      } />
         <Route path="/free" element={
        <FreePage />
      } />
        <Route path="/auditions/:auditionId" element={<><AuditionDetail />
        <Home/><Overlay />
        </>} />
        <Route path="/submit-audition" element={<SubmitAuditionForm />} />
    </Routes>
  </BrowserRouter>
);