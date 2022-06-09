import logoTienda from './img/logoTienda.png';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt= "logo de la Tienda" src={logoTienda} className="App-logo"/>
        <NavBar/>
        <ItemListContainer greeting="Hola! Este es nuestro Stock"/>
      </header>
    </div>
  );
}

export default App;
