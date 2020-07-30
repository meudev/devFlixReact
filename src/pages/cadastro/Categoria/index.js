import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [valoresDaCategorias, setValoresDaCategorias] = useState(valoresIniciais);

    function setValoresDaCategoria(chave, valor) {
        setValoresDaCategorias({
            ...valoresDaCategorias,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {
        setValoresDaCategoria(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {valoresDaCategorias.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    valoresDaCategorias
                ]);

                setValoresDaCategorias(valoresIniciais);
            }}>

                <FormField
                    label='Nome da Categoria'
                    type='text'
                    name='nome'
                    value={valoresDaCategorias.nome}
                    onChange={handleChange}
                />
                <FormField
                    label='Descrição'
                    type='text'
                    name='descricao'
                    value={valoresDaCategorias.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label='Cor'
                    type='color'
                    name='cor'
                    value={valoresDaCategorias.cor}
                    onChange={handleChange}
                />

                <button> Cadastrar </button>
            </form>

            { <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul> }

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;