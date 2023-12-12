import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext} from 'react'
import NotFound from './components/NotFound'
import StateProvider from './components/StateProvider'
import Marketplace from './components/Marketplace'
import ImageUploader from './components/ImageUploader'
import SelectBuild from './components/selectBuild'
import PcBuilder from './components/PcBuilder'
import Login from './components/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import PaginaPagar from './components/PaginaPagar';

function App() {
  const StateContext = createContext()
  
  return (
    <BrowserRouter id="App">
      <StateProvider context={StateContext}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT}>
          <Routes>
            <Route exact path="/" element={<Login context={StateContext} />} />
            <Route exact path="/marketplace" element={<Marketplace context={StateContext} />} />
            <Route exact path="/upload" element={<ImageUploader context={StateContext} />} />
            <Route exact path="/selectBuild" element={<SelectBuild context={StateContext}/>} />
            <Route exact path="/PcBuilder" element={<PcBuilder context={StateContext}/>} />
            <Route exact path="/paginaPagar" element={<PaginaPagar context={StateContext} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </GoogleOAuthProvider>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
