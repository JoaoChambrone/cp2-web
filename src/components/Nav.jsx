import {} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "../styles/Nav.scss"

function Nav() {
  
/*Hooks navigate */
  const navigate = useNavigate();

  /*função */
  const handleLogout = async()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("Saindo da sessão");
    navigate('/');
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" className='adoh'>HOME</Link>
            </li>
            <li>
              <Link to="/cadastrar/produto" className='adoh'>PRODUTOS</Link>
            </li>
            <li>
              <Link to="/cadastrar/pedido" className='adoh'>FAÇA SEU PEDIDO</Link>
            </li>
            <li>
              <Link to="/sobre" className='adoh'>SOBRE</Link>
            </li>
            <li>
              <Link to="/login" className='adoh'>LOGIN</Link>
            </li>
            <button onClick={handleLogout}>LOGOUT</button>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
