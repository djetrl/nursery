
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import HelpToShelter from '../pages/helpToShelter/helpToShelter';
import WaitingForOwner from '../pages/waitingForOwner/waitingForOwner';
import Admin from '../pages/admin/admin';
import LuckyOnes from '../pages/luckOnes/luckyOnes';
function App() {


  return(
    <Router>
      <div>
       <Header/>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path='/helpToShelter' element={<HelpToShelter/>}/>
          <Route path='/waitingForOwner' element={<WaitingForOwner/>}/>
          <Route path='/LuckyOnes' element={<LuckyOnes/>}/>
          <Route path='/9eaa481d-548d-4f70-8561-0a0301e0f99b' element={<Admin/>}/>
       </Routes>
       
      <Footer/>
      </div>
    </Router>

  )
}

export default App;
