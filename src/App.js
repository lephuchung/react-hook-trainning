import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav/Nav';

const App = () => {
  let name = 'Lê Hưng';
  // let number = 2003;
  // let obj = {
  //   firstName: "Noris",
  //   lastName: "Nora"
  // };
  // let link = "https://www.facebook.com/le.phuchung.25040601";
  const handleClickButton = (event) => {
    console.log('click btn', event.target.value);
  }

  return (
    <div className="App">
      {/* {console.log('check obj: ', obj)} */}
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lê Phúc Hưng hello world,
        </p>
        <input type='text' value={name} onClick={(event) => handleClickButton(event)} />
        <button type='button' onClick={(event) => handleClickButton(event)}>Click me  </button>
        {/* <h3>{name} - {number}</h3>
        <h4>{obj.firstName} {obj.lastName}</h4>
        <p>{JSON.stringify(obj)}</p>
        <a href={link}>My facebook</a> */}
      </header>
    </div>
  );
}

export default App;
