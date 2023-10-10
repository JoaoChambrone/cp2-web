import {} from 'react'
//importando a estrutura para maninupar as imagens
import {Swiper, SwiperSlide} from 'swiper/react'
import {useState, useEffect} from 'react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './estilo.module.css'


function Home (){

  //Hooks

    const [slidePreview, setSlidePreview] =useState(1);

  // crinado o ojeto de imagems
     const data =[
      {id: '1', image: './src/assets/img1.jpg'},
      {id: '2', image: './src/assets/img2.jpg'},
      {id: '3', image: './src/assets/img3.jpg'},

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
      
    </section>
  )
}
export default Home