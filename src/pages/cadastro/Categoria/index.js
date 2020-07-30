/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valoresDaCategorias, setValoresDaCategorias] = useState(valoresIniciais);

  function setValoresDaCategoria(chave, valor) {
    setValoresDaCategorias({
      ...valoresDaCategorias,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValoresDaCategoria(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL_PRODUCAO = 'https://meudevflix.herokuapp.com/categorias';
    const URL_DEV = 'http://localhost:8080/categorias';

    const URL_TOP = window.location.hostname.includes('localhost') ? URL_DEV : URL_PRODUCAO;
    
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: 
        {valoresDaCategorias.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valoresDaCategorias,
        ]);

        setValoresDaCategorias(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valoresDaCategorias.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valoresDaCategorias.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valoresDaCategorias.cor}
          onChange={handleChange}
        />

        <Button> Cadastrar </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Carregando...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
