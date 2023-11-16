import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import Interface from './Interface.jsx';
import { KeyboardControls } from '@react-three/drei';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar.jsx'; 
import { Overlay } from './home/Overlay.jsx';
import Home from './home/home.jsx';
import HomePage from './HomePage.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <BrowserRouter>
   <NavBar/> 
    <Routes>
      <Route path="/" element={
        <>
        <HomePage/>
        {/* <Home /><Overlay /> */}
        </>
      } />
      <Route path="/game" element={
        <KeyboardControls
          map={[
            { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
            { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
            { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
            { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
            { name: 'jump', keys: ['Space'] },
          ]}
        >
          <Canvas
            shadows
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [2.5, 4, 6]
            }}
          >
            <Experience />
          </Canvas>
          <Interface />
        </KeyboardControls>
      } />
    </Routes>
  </BrowserRouter>
);