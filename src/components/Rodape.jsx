import {} from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMail} from "react-icons/ai";
import "../styles/Rodape.scss"


function Ropade (){
  return(
    <section className='footer' >
      <h3>@2023-todos os direitos reservados</h3>
      <ul className='listfoo'>
        <li><AiFillFacebook /></li>
        <li><AiFillLinkedin /></li>
        <li><AiFillInstagram /></li>
        <li><AiOutlineMail /></li>
      </ul>
    
    </section>
  )
}
export default Ropade