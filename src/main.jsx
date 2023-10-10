import {} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import Pedido from './routes/Pedido.jsx';
import InserirProduto from './routes/InserirProduto.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import ExcluirProduto from './routes/ExcluirProduto.jsx';
import InserirPedido from './routes/InserirPedido.jsx';
import EditarPedido from './routes/EditarPedido.jsx';
import ExcluirPedido from './routes/ExcluirPedido.jsx';
import Conteudo from './routes/Conteudo.jsx';
import Login from './routes/Login.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login/> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/pedido', element: <Pedido /> },
      { path: '/conteudo', element: <Conteudo /> },
      { path: '/cadastrar/produto', element: <InserirProduto /> },
      /*criando a rota editar produtos e passando o id do produto */
      { path: '/editar/produtos/:id', element: <EditarProduto /> },
        /*criando a rota excluir produtos e passando o id do produto */
      { path: '/excluir/produtos/:id', element: <ExcluirProduto /> },
      { path: '/cadastrar/pedido', element: <InserirPedido /> },
      { path: '/editar/pedido/:id', element: <EditarPedido /> },
      { path: '/excluir/pedido/:id', element: <ExcluirPedido /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
