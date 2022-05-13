import axios from 'axios';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';


export default function Carousel() {
  
  const [billboard, setBillboard] = useState([
    {
      image: './assets/propagandas/1.jpg',
    },
    {
      image: './assets/propagandas/2.jpg',
    },
    {
      image: './assets/propagandas/3.png',
    },
    {
      image: './assets/propagandas/4.jpg',
    },
    {
      image: './assets/propagandas/5.png',
    },
    {
      image: './assets/propagandas/6.png',
    }

  ])


  // PUXA AS PROPAGANDAS DO BANCO DE DADOS
  useEffect(() => {
    (async () => {
      try {
        axios.get("http://localhost:5000/ads")
          .then((response) => {
            // COMENTADO PARA QUE NAO FIQUE SEM PROPAGANDAS NA TELA POR ENQUANTO
            // setBillboard(response.data);
          }).catch(e => console.log(e));
      } catch (e) {
        alert("Erro ao receber dados de propagandas");
        console.log(e.response);
      }
    })();
  }, []);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === billboard.length - 1 ? 0 : current + 1)

    // { SOLUÇÃO DO NELSON
    //   index++;
    //   if (index === billboard.length - 1) {
    //     index = 0
    //   }
    //   setCurrent(index)
    // }
  }

  const scrollInterval = 3000;
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('Logs every 3 seconds');
      nextSlide();
      // ItemsWrapper.scrollBy(300, 0);
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [])


  return (
    <ItemsWrapper>
      <div className='items'>
        {billboard.map(({ image }, i) => (
          <Item image={image} key={i} />
        ))}
      </div>
    </ItemsWrapper>
  )
}

function Item({ image }) {
  return (
    <div className='item'>
      <img src={image} alt='propaganda 6' />
      <img className='filter' src='./assets/ripped.png' alt='filtro' />
    </div>
  )
}

const ItemsWrapper = styled.div`
  width: 100vw;
  p{
    margin: none;
  }
  .items{
    display: flex;
    overflow-x: auto;
    /* overflow: hidden; */
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    background-color: var(--fundo);
  }
  .item{
    width: 100%;
    height: auto;
    flex: none;
    scroll-snap-align: start;
    position: relative;
    margin-right: 20px;
  }
  .items img{
    width: 100%;
  }
  .filter{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 60px;
    transform: scaleY(-1)
  }
  .description{
    background-color: red;
    height: 20px;
    margin: 0;
  }
  
`
