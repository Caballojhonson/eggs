import './App.css';

function App() {

  const handleClick = (e) => {

    const imgPositionX = e.target.getBoundingClientRect().left
    const imgPositionY = e.target.getBoundingClientRect().top
    const clickX = e.clientX
    const clickY = e.clientY
    const imgCoordX = () => clickX - imgPositionX;
    const imgCoordY = () => clickY - imgPositionY;

    console.log(imgCoordX())
    console.log(imgCoordY())

  }

  return (
    <div className="App">
      <img onClick={handleClick} className="image__one" alt=""></img>
    </div>
  );
}

export default App;

