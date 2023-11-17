import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import RomanToDecimal from './pages/RomanToDecimal';
import HeatMap from './pages/HeatMap';
import Header from './Header';
import Footer from './Footer';

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
    </Routes>
    </main>
    <footer>
      <Footer/>
    </footer>
  </BrowserRouter>
  )
}

export default App