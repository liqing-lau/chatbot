import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Panda from './components/panda.js';
import Home from './components/home.js';

function App() {
  return (
    <>            
          <Routes>                
             <Route path='/panda' element={<Panda/>}/>  
             <Route path='/' element={<Home/>}/>            
          </Routes>
    </>
  );
}

export default App;
