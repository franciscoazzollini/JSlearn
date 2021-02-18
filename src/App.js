import Eventos from "./components/Eventos";
import Listas from "./components/Listas";
import Parrafo from "./components/Parrafo";
import Variables from "./components/Variables";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
     <h1>Hola Mundo React</h1>
     <Formulario/>
     {/* {<Parrafo/>
     <Parrafo/>
     <Variables/>
     <Eventos/>
     <Listas/>} */}
    
    </div>
  );
}

export default App;
