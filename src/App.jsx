import logoTienda from './img/logoTienda.png';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacto from './pages/Contacto';

function App() {
  return (
    <section className="App">
      <div className="App-header">
        <a href='/'>
        <img alt= "logo de la Tienda" src={logoTienda} className="App-logo"/>
        </a>
        <BrowserRouter>
          <div><NavBar/></div>
          <Routes>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/' element={<ItemListContainer greeting="Nuestro Stock"/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="En Oferta"/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;
