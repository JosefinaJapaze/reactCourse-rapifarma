import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemList/itemListContainer';
function App() {
  const darBienvenida = () => alert("Bienvenido a rapifarma");
  return (
    <>
    <div className="App">
      <NavBar nombreDeLaTienda="rapifarma" subtitulo="store" darBienvenida={darBienvenida}/>

      <ItemListContainer greeting="¡Bienvenida/o a nuestra web!" />
    </div>
    </>
  );
}

export default App;
