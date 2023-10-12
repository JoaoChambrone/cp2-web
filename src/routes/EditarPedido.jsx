/* useParams -Ele serve para receber parâmetros pela rota. Quando vamos criar uma rota, é possível fazer que ela receba parâmetros */
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import { useState } from 'react';
import "../styles/Ip.scss"

function EditarPedido() {
  //Recuperando o ID do produto selecionado com useParams()
  const { id } = useParams();
  //Utilizando o useNavigate para fazer um redirect
  const navigate = useNavigate();

  /*Filter-para filtrar elementos de um array de dados antes de renderizá-los em uma lista */
  const recPedidoListaById = ListaPedidos.filter((item) => item.id == id);

  /*Hook -useState*/

  const [pedido, setPedido] = useState({
    id: recPedidoListaById[0].id,
    nome: recPedidoListaById[0].nome,
    desc: recPedidoListaById[0].desc,
  });

  /*funções */

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaPedidos.forEach((item, index) => {
      if (item.id == pedido.id) {
        indice = index;
      }
    });
    /*metodo slice- vai dividir o array com base no indice e no objeto */
    ListaPedidos.splice(indice, 1, pedido);
    /*chamar a tela produtos */
    navigate('/pedido');
  };

  const handleChange = (event) => {
    /*desestruturando */
    const { name, value } = event.target;
    /*pegando o useState e fazendo um spred no produto pegando o name e value do input */
    setPedido({ ...pedido, [name]: value });
  };

  return (
    <section >
      <h1 >EDITAR PEDIDO</h1>
      {/*chamando a função handleSubmit dentro do form */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PRODUTO SELECIONADO</legend>
          <div>
            <input
              type="hidden"
              name="id"
              value={pedido.id}
               /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idNome">Nome do Produto:</label>
            <br />
            <input
              type="text"
              name="nome"
              id="idNome"
              value={pedido.nome}
                 /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição do Produto:</label>
            <br />
            <input
              type="text"
              name="desc"
              id="idDesc"
              value={pedido.desc}
                 /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="subtmit" >EDITAR</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
export default EditarPedido;
