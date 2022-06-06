import logoTienda from './img/logoTienda.png';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1>Bienvenidos a mi Tienda</h1>
        <img alt= "logo de la Tienda" src={logoTienda} className="App-logo"/>
        <br/>
        <hr/>
        <p>Les deseamos una buena compra!</p>
      </header>
    </div>
  );
}

export default App;
