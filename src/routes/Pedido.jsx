import {} from 'react';
import { Link } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import { AiOutlineEdit as EditarPedido } from "react-icons/ai";
import { RiDeleteBin2Fill as ExcluirPedido} from 'react-icons/ri';
import "../styles/PEPR.scss"

function Pedido() {
  return (
    <section>
      <h1>SEU PEDIDO ATÉ AGORA</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
            {ListaPedidos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>
                  {' '}
                  {/*Link para chamar a tela de editar produtos */}
                  <Link to={`/editar/pedido/${item.id}`}>
                    <EditarPedido/>
                  </Link>{' '}
                  | {/*Link para chamar a tela de excluir produtos */}
                  <Link to={`/excluir/pedido/${item.id}`}>
                    <ExcluirPedido />
                    {/*espaço entre os links '' */}
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <Link to="/cadastrar/pedido" className='butped'>FAÇA MAIS UM PEDIDO</Link>
      </div>
    </section>
  );
}
export default Pedido;