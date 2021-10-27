import './App.css';
import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer';
import { ItemListContainer } from './components/item-list-container/ItemListContainer';
import { NavBar } from './components/nav-bar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a mi tienda"}/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
