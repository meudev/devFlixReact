import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(

  <BrowserRouter>
      <Switch>
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
        <Route path="/cadastro/Video" component={CadastroVideo} />
        <Route path="/" component={Home} exact />
        <Route component={Pagina404} />
      </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
