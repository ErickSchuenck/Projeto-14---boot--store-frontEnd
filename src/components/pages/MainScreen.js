import React, { useContext, useEffect, useState } from 'react'
import Carousel from '../Carousel'
import Header from '../Header'
import ItemComponent from '../ItemComponent'
import UserContext from '../../contexts/userContext';
import axios from 'axios';
import WelcomeHeader from '../WelcomeHeader.js';


export default function MainScreen() {
  const { user } = useContext(UserContext);

  const [products, setProducts] = useState([
    // PRODUTOS PARA TESTE
    {
      value: 299.99,
      name: "Air Max 2023",
      image: './assets/boots/1b.jpg',
      id: 1,
      description: 'Made from vivid red satin.  It has a sporty appearance.',
      timesItWasBought: 0,
    },
    {
      value: 199.99,
      name: "Low OG Wang",
      image: './assets/boots/2b.jpg',
      id: 2,
      description: 'Designed in  brown, vivid magenta, dark turquoise, and black.',
      timesItWasBought: 10,
    },
    {
      value: 299.99,
      name: "Tailwind Flex",
      image: './assets/boots/3b.png',
      id: 3,
      description: 'Made from retro design print fabric',
      timesItWasBought: 0,
    },
    {
      value: 189.99,
      name: "Flex Air SL",
      image: './assets/boots/4b.jpg',
      id: 4,
      description: 'Woven from white, gray, and rich brown. It is accented with a coordinating band.',
      timesItWasBought: 0,
    },
    {
      value: 379.99,
      name: "Yard Flex 2023",
      image: './assets/boots/5b.jpg',
      id: 5,
      description: 'Made in whitish colors, perfect for jogging',
      timesItWasBought: 0,
    },
    {
      value: 159.99,
      name: "Retro 2019 collection",
      image: './assets/boots/6b.jpg',
      id: 6,
      description: 'Made from light gray canvas. It is accented with gold chains.',
      timesItWasBought: 3,
    },
    {
      value: 229.99,
      name: "Flash NF18s",
      image: './assets/boots/7b.jpg',
      id: 7,
      description: 'Made from wavy fabric designed in white, and light gray.',
      timesItWasBought: 2,
    },
    {
      value: 149.99,
      name: "Taylor C/19",
      image: './assets/boots/8b.jpg',
      id: 8,
      description: 'Made from polka - dotted fabric, has a sporty appearance.',
      timesItWasBought: 0,
    },
    {
      value: 319.99,
      name: "AllBlack Flex 2023",
      image: './assets/boots/9b.png',
      id: 9,
      description: '2023 collection designed in black.',
      timesItWasBought: 0,
    },
    {
      value: 199.99,
      name: "NFs Flex c22",
      image: './assets/boots/10b.jpg',
      id: 10,
      description: 'NFs Limited edition 2022',
      timesItWasBought: 4,
    },
    {
      value: 239.99,
      name: "NcJavo Air",
      image: './assets/boots/11b.png',
      id: 11,
      description: 'This shoe is made from camo print designed in white, gray, and black',
      timesItWasBought: 0,
    },
    {
      value: 329.99,
      name: "Yng Arsene 33 edition",
      image: './assets/boots/12.jpg',
      id: 12,
      description: 'Made from paisley print fabric.',
      timesItWasBought: 0,
    },
  ]);

  // BUSCA OS PRODUTOS DO BANCO DE DADOS
  useEffect(() => {
    (async () => {
      try {
        axios.get("http://localhost:5000/products")
          .then((response) => {
            setProducts(response.data);
          }).catch(e => console.log(e));
      } catch (e) {
        alert("Erro ao receber dados de produtos");
        console.log(e.response);
      }
    })();
  }, []);


  function orderProducts(type) {
    if (type === 'crescent') {
      setProducts([...products.sort((a, b) => a.value - b.value)])
    }
    if (type === 'decrescent') {
      setProducts([...products.sort((a, b) => b.value - a.value)])
    }
    if (type === 'mostBuys') {
      setProducts([...products.sort((a, b) => b.timesItWasBought - a.timesItWasBought)])
    }
  }


  return (
    <>
      <Header orderProducts={orderProducts()} />
      <Carousel />
      {user ? <WelcomeHeader /> : <></>}

      {/* ERASE THIS */}
      <button onClick={() => orderProducts('crescent')}
      >crescente</button>
      <button onClick={() => orderProducts('decrescent')}
      >decrescente</button>
      <button onClick={() => orderProducts('mostBuys')}
      >vezes q foi comprado</button>
      {/* ERASE THIS */}

      {
        products.map(product => <ItemComponent
          key={product._id} item={product}
          products={products}
        />)
      }

    </>
  )
}
