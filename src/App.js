import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Game from './pages/Game';
import Games from './pages/Games';
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/games/:id' element={<Game />}/>
        {/* <Route path="*" element={<Error404 />}/> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
