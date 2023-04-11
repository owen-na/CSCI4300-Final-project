import Card from './Components/Card/Card'
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Pages/Login" element={<Login />} />
        <Route path="/Pages/SignIn" element={<SignIn />} />
        <Route path="/" element={
    <div className="mainParent">
      <button type='button'>
        <img src="./public/assets/724927.png" alt="Backarrow" className="backArrow"/>
      </button>
      <div className="horizontalScroll">
        <Card />
      </div>
      <button type='button'>
        <img src="./public/assets/724927.png" alt="arrow" />
      </button>
    </div>
        } />
    </Routes>
    </>
  );
}

export default App;
