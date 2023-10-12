import {} from 'react'
import engim from "../assets/ENG DE SOFT.png"
import "../styles/Sobre.scss"


function Sobre (){
  return(
    <>
    <section>
      <img src={engim} alt="erro" />
      <div className="devs">
        <h1>DESENVOLVEDORES</h1>
        <ul>
          <li>JOÃO PEDRO OLIVEIRA CHAMBRONE</li>
          <br />
          <li>FELIPE DE CAMPOS MELLO ARNUS</li>
          <br />
          <li>VITOR HUGO GONÇALVES RODRIGUES</li>
          <br />
          <li>JOÃO PEDRO DE SOUZA VIEIRA</li>
        </ul>
      </div>
    </section>
    </>
  )
}
export default Sobre