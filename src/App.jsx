import logoTienda from './img/logoTienda.png';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <section className="App">
      <div className="App-header">
        <img alt= "logo de la Tienda" src={logoTienda} className="App-logo"/>
        <div><NavBar/></div>
        <div><ItemDetailContainer/></div>
        <div><ItemListContainer greeting="Nuestro Stock"/></div>
      </div>
    </section>
  );
}

export default App;
