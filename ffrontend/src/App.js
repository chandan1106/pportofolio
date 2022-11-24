import './App.css';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screens/productScreen';
import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import data from './data';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add('open');
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove('open');
  }
  return (
    <BrowserRouter>
    <div classname="grid-container">
    <header classname="header">
        <div classname="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">Cr Shop</Link>
            <a href="index.html">CR Shop</a>
        </div>
        <div classname="header-links">
            <a href="cart.html">Cart</a>
            <a href="sign-in.html">Sign-in</a>
        </div>
    </header>
    <aside classname="sidebar">
     <h3>Shopping Categories</h3>
     <button classname="close-button" onClick={closeMenu}>x</button>
      <ul>
       <li>
        <a href="index.html">Shirts</a>
       </li>
       <li>
        <a href="index.html">Pants</a>
       </li>
      </ul>
    </aside>
    <main classname="main">
     <div classname="content">
        <Route path='/products/:id'  component={ProductScreen} />
        <Route path='/' exact={true} component={HomeScreen} />
        <route path="/cart/:id?" component={HomeScreen}></route>
      </div>
    </main>
    <footer classname="footer">
        All rights reserved @crshop
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
