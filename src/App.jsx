import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './elements/Header';
import Footer from './elements/Footer';
import Home from './pages/Home';
import Landing from './pages/Landing';
import AddBlurb from './pages/AddBlurb';
import EditBlurb from './pages/EditBlurb';
import MemoryPage from './pages/MemoryPage';


function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route index element={<Landing/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/add-blurb' element={<AddBlurb/>}></Route>
          <Route path='/edit-blurb' element={<EditBlurb/>}></Route>
          <Route path='/home/:blurbId' element={<MemoryPage/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
