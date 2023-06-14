import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import Header from './elements/Header';
import Footer from './elements/Footer';
import Home from './pages/Home';
import Landing from './pages/Landing';
import AddBlurb from './pages/AddBlurb';
import MemoryPage from './pages/MemoryPage';
import AuthContext from './store/authContext';
import { useContext } from 'react';


function App() {
  const {userId} = useContext(AuthContext)
  return (
    <div className='bg-lightTan'>
      <Header/>
        <Routes>
          <Route index element={userId ? <Navigate to='/home'/> : <Landing/>}></Route>
          <Route path='/home' element={userId ? <Home/> : <Navigate to='/'/>}></Route>
          <Route path='/add-blurb' element={userId ? <AddBlurb/> : <Navigate to='/'/>}></Route>
          <Route path='/memory-page/:blurbId' element={userId ? <MemoryPage/> : <Navigate to='/'/>}></Route>
        </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
