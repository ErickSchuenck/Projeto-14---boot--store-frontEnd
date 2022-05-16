import axios from 'axios';
import React, { useState, useEffect, useCallback, useRef } from 'react'
import Item from './Item';
import ItemsWrapper from './carouselStyles';

const SCROLLINTERVAL = 6000;
export default function Carousel() {
  const billboardContainer = useRef(null);


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
        axios.get("https://flexstore-back.herokuapp.com/ads")
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

  const nextSlide = useCallback(
    () => {
      setCurrent(c => (c + 1) % billboard.length)
      billboardContainer.current.scroll({
        top: 0,
        left: 300 * current,
        behavior: 'smooth'
      });
    },
    [billboard, setCurrent, current, billboardContainer],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, SCROLLINTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide])

  return (
    <ItemsWrapper >
      <div className='items' ref={billboardContainer}>
        {billboard.map(({ image }, i) => (
          <Item image={image} key={i} />
        ))}
      </div>
    </ItemsWrapper>
  )
}
