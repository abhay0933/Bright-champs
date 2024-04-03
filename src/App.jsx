import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import FirstPage from './Pages/FirstPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import FourthPage from './Pages/FourthPage';
import PlayGame from './Pages/PlayGame';
import FinalPage from './Pages/FinalPage';
import Updatecount from './context/Updatecount';

function App() {
  

  return (
    <Updatecount>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/start" element={<SecondPage />} />
        <Route path="/next" element={<ThirdPage />} />
        <Route path="/instructions" element={<FourthPage />} />
        <Route path="/game" element={<PlayGame />} />
        <Route path="/final" element={<FinalPage />} />

    </Routes>
  </BrowserRouter>
  </Updatecount>
  )
}

export default App
