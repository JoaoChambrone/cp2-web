import {} from 'react'
//importando a estrutura para maninupar as imagens
import {Swiper, SwiperSlide} from 'swiper/react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './estilo.module.css'
import image from "../assets/beyond-burger.jpg"
import image2 from "../assets/receitas-de-comida-vegana.jpg"
import image3 from "../assets/marcas-com-macarrao-vegano-scaled.jpg"
import image4 from "../assets/Vegan-Kebab-Recipe1-1.jpg"
import image5 from "../assets/comida-vegana.jpg"
import image6 from "../assets/Mana-Kai-quibe.jpg"
import "../styles/Home.scss"


function Home (){

  //Hooks

    const [slidePreview, setSlidePreview] =useState(1);

  // crinado o ojeto de imagems
     const data =[
      {id: '1', image: './src/assets/39193_restaurantes-vegetarianos-capa-reproducao-instagram-apfel-e-casa-jaya.jpg'},
      {id: '2', image: './src/assets/restaurantes-famosos-para-comer-gastando-pouco.jpg'},
      {id: '3', image: './src/assets/restaurante-vegano-6-e1522870175296.jpg'}

    ];
// useEffect faz o efeito colateral 
    useEffect(() =>{
      function handleRezise(){
        if(window.innerWidth < 720){
          setSlidePreview(1);
        }else{
          setSlidePreview(2);
        }
      }
      handleRezise();

      //modifica toda vez que o usuario diminuir a tela
      window.addEventListener('resize', handleRezise);
      return()=>{
        window.removeEventListener('resize', handleRezise);
      };
      //retornando um array vazio
    },[]);


  return(
    <section>

      <Swiper 
       slidePreview={slidePreview}
       pagination={{clickable:true}}
       navigation
      >
        {data.map((item)=>(
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="imagem" className={styles.slideItem}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='imgs'>
          <img src={image} className='imgs2' alt="erro" width={100} height={80}/>
          <img src={image2} className='imgs2' alt="erro" width={100} height={80}/>
          <img src={image3} className='imgs2' alt="erro" width={100} height={80}/>
          <img src={image4} className='imgs2' alt="erro" width={100} height={80}/>
          
      </div>
      <h1 className='titleveg'>O melhor do veganismo</h1>
      <div className='divlinda'>
          <div className='divlinda2'>
            <img src={image5} alt="erro" width= "50%"/>
            <div className='divlinha'>
              <h1>Aqui temos pratos deliciosos!</h1>
              <h3>Veja os nossos <br /> produtos e fique <br /> com água <br /> na boca!</h3>
              <Link className='butped' to= '/cadastrar/produto'>VEJA NOSSOS PRODUTOS</Link>
            </div>

          </div>
          <div className='divlinda3'>
          <div className='divlinha'>
              <h1>Já viu?</h1>
              <h3>Agora peça <br /> e seja feliz <br /> comendo nossos <br /> deliciosos pratos!</h3>
              <Link className='butped' to= '/cadastrar/pedido'>FAÇA JÁ O SEU PEDIDO!</Link>
            </div>

            <img className= "img6" src={image6} alt="erro" width= "50%"/>
            
          </div>
      </div>

      
    </section>
  )
}
export default Home