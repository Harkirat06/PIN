import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext} from 'react'
import NotFound from './components/NotFound'
import StateProvider from './components/StateProvider'
import Marketplace from './components/Marketplace'
import ImageUploader from './components/ImageUploader'
import SelectBuild from './components/selectBuild'
import PcBuilder from './components/PcBuilder'

function App() {
  const StateContext = createContext()
  
  return (
    <BrowserRouter id="App">
      <StateProvider context={StateContext}>
          <Routes>
            <Route exact path="/" element={<Marketplace context={StateContext} />} />
            <Route exact path="/upload" element={<ImageUploader context={StateContext} />} />
            <Route exact path="/selectBuild" element={<SelectBuild context={StateContext}/>} />
            <Route exact path="/PcBuilder" element={<PcBuilder context={StateContext}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
