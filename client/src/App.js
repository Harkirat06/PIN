import './App.css';
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext} from 'react'
import NotFound from './components/NotFound'
import StateProvider from './components/StateProvider'
import Marketplace from './components/Marketplace'
import Searcher from './components/Searcher';

function App() {
  const StateContext = createContext()
  
  return (
    <BrowserRouter id="App">
      <StateProvider context={StateContext}>
          <Routes>
            <Route exact path="/" element={<Marketplace context={StateContext} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
