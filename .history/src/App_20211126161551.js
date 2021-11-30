import './App.css';
import CartProvider from './components/cart-context/CartContext';
import Footer from './components/footer/Footer';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes/>
      </CartProvider>
      <Footer/>
    </div>
  );
}

export default App;
