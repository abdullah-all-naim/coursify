import React from 'react';
import './App.css';
import AppNavigation from './Components/AppNavigation/AppNavigation';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Opportunities from './Components/Opportunites/Opportunites';
import Doubts from './Components/Doubts/Doubts';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import LiveClass from './Components/LiveClass/LiveClass';
import StateBoard from './Components/StateBoard/StateBoard';
import Books from './Components/Books/Books';
import JeeExam from './Components/JeeExam/JeeExam';
import NeetExam from './Components/NeetExam/NeetExam';
import Subjects from './Components/Subjects/Subjects';

function App() {
  return (
    <BrowserRouter>
      <AppNavigation></AppNavigation>
      <Header></Header>
      <Opportunities></Opportunities>
      <Doubts></Doubts>
      <HowItWorks></HowItWorks>
      <LiveClass></LiveClass>
      <JeeExam></JeeExam>
      <NeetExam></NeetExam>
      <StateBoard></StateBoard>
      <Subjects></Subjects>
      <Books></Books>
    </BrowserRouter>
  );
}

export default App;
