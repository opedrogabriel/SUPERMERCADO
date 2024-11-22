// importação do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importação estilo css padrão
import './App.css';

// importação de paginas
import Login from './pages/Login';
import Home from './pages/Home';

// importação de componentes
import NavBarra from './components/NavBarra';

// importação de gereciador de rotas
import {BrowserRouter, Route, Routes} from "react-router-dom"
import CadastroProduto from './pages/CadastroProduto';
import EditarProduto from './pages/EditarProduto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/produto/cadastrar" element={<CadastroProduto/>}/>
        <Route path="/produto/editar/:id" element={<EditarProduto/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
