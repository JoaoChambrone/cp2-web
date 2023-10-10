import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';


function Excluir() {
  /*Hooks- useParams e Navigate */
  const { id } = useParams();
  const navigate = useNavigate();

  const recPedidoListaById = ListaPedidos.filter((item) => item.id == id);
  /*Hook-useState */
  const [pedido] = useState({
    id: recPedidoListaById[0].id,
    nome: recPedidoListaById[0].nome,
    desc: recPedidoListaById[0].desc,
    valor: recPedidoListaById[0].valor,
  });
  /*funções */
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaPedidos.forEach((item, index) => {
      if (item.id == pedido.id) {
        indice = index;
      }
    });
    ListaPedidos.splice(indice, 1);
    navigate('/pedido');
  };

  return (
    <section>
      <h1>Excluir Pedido</h1>
      <div>
        <p>Nome : {pedido.nome}</p>
        <p>Desc : {pedido.desc}</p>
        <p>valor : {pedido.valor}</p>
      </div>
      <div>
        {/*chamando a função handleExclude dentro do botão*/}
        <button onClick={handleExclude} >
          EXCLUIR
        </button>
        {/*chamando o navigate para voltar para a tela produtos */}
        <button onClick={() => navigate('/pedido')}>
          CANCELAR
        </button>
      </div>
    </section>
  );
}
export default Excluir;
