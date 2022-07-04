import logoTienda from './img/logoTienda.png';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacto from './pages/Contacto';
import Cart from './components/Cart';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <section className="App">
      <div className="App-header">
        <a href='/'>
        <img alt= "logo de la Tienda" src={logoTienda} className="App-logo"/>
        </a>
        <CartProvider>
          <BrowserRouter>
            <div><NavBar/></div>
            <Routes>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/' element={<ItemListContainer greeting="Nuestro Stock"/>}/>
              <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="En Oferta"/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/Cart' element={<Cart/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
    </section>
  );
}

export default App;
