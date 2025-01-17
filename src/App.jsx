import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Cabecalho, Conteudo, Rodape } from './components';
import { Inicial } from './pages';
import './App.css';
import { AppContextProvider } from './contexts';

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>   
        <Router />
      </BrowserRouter> 
    </AppContextProvider>
  );
};

export { App };
