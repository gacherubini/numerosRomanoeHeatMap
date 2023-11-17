import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import RomanToDecimal from './pages/RomanToDecimal';
import HeatMap from './pages/HeatMap';
import Header from './Header';
import Footer from './Footer';
import TreeMap from './pages/TreeMap';

const App = () => {
  return (
    <BrowserRouter>
    <header>
        <Header/>
    </header>
    <main> 
    <Routes>
                <Route path="/" element = {<RomanToDecimal/>} />
                <Route path="/heatmap" element = {<HeatMap/>} />
                <Route path="/treemap" element = {<TreeMap/>} />
    </Routes>
    </main>
    <footer>
      <Footer/>
    </footer>
  </BrowserRouter>
  )
}

export default App