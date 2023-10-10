import { useState } from 'react';
import { ListaPedidos } from '../components/ListaPedidos';
/* É através dele que se conseguirá fazer a navegação entre as diferentes rotas de uma aplicação. Declaramos ele atribuindo o hook a uma variável e depois invocando-a, passando a rota do destino como parâmetro obrigatório, conforme exemplo: */
import { useNavigate } from 'react-router-dom';


function InserirPedido() {
  /*Hooks - navigate */
  const navigate = useNavigate();

  //Gerando um novo ID
  let novoId = ListaPedidos[ListaPedidos.length - 1].id + 1;

  /*Hooks - useState */
  const [pedido, setPedido] = useState({
    id: novoId,
    nome: '',
    desc: '',
    valor: '',
  });

  /*funções */

  const handleSubmit = (e) => {
    /*serve para prevenir o comportamento padrão de um evento */
    e.preventDefault();
    /*puxa tudo que estiver na lista de produtos */
    ListaProdutos.push(pedido);
    navigate('/pedido');
  };

  const handleChange = (e) => {
    /*serve para prevenir o comportamento padrão de um evento */
    e.preventDefault();
    //Destructuring
    const { name, value } = e.target;
    //Através da função set do useState, vamos adicionar o valor(value), na propriedade name que é a mesma que foi declarada no useState produto.
    //Utilize o SPREAD, para tornar a função mais simples!!
    setPedido({ ...pedido, [name]: value });
  };

  return (
    <section>
      <h1>Cadastro de Pedidos</h1>
      {/*chando a função handleSubmit dentro do form */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PEDIDO</legend>
          <p>
            <label htmlFor="idNome"> Nome do Produto:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
           
              value={pedido.nome}
              /*chamando a função handleChange dentro do input */
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idDesc">Descrição Pedido:</label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              
              value={pedido.desc}
              /*chamando a função handleChange dentro do input */
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idValor"> Valor do Produto:</label>
            <input
              type="text"
              name="valor"
              id="idValor"
              
              value={pedido.valor}
              /*chamando a função handleChange dentro do input */
              onChange={handleChange}
            />
          </p>
          <p>
            <button type="submit">
              ADICIONAR PEDIDO
            </button>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default InserirPedido;