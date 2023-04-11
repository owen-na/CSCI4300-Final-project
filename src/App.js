import Card from './Components/Card/Card'
import Header from './Components/Header/Header';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <div className="mainParent">
      <button type='button'>
        <img src="../public/assets/724927.png" alt="arrow" className="backArrow"/>
      </button>
      <div className="horizontalScroll">
        <Card />
      </div>
      <button type='button'>
        <img src="../public/assets/724927.png" alt="arrow" />
      </button>
    </div>
    </>
  );
}

export default App;
