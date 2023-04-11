import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import "./App.css";
import arrow from "./assets/arrow.svg";
function App() {
  return (
    <>
      <Header />
      <div className="mainParent">
        <button type="button">
          <img src={arrow} alt="Backarrow" className="barrow" />
        </button>
        <div className="horizontalScroll">
          <Card />
        </div>
        <button type="button">
          <img src={arrow} alt="arrow" className="farrow" />
        </button>
      </div>
    </>
  );
}

export default App;
