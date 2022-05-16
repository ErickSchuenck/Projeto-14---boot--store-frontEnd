import React, { useContext, useEffect, useState } from 'react'
import Carousel from '../Carousel'
import Header from '../Header'
import ItemComponent from '../ItemComponent'
import UserContext from '../../contexts/userContext';
import axios from 'axios';

export default function MainScreen() {
  const { user, cartItems, setCartItems } = useContext(UserContext);
  const [products, setProducts] = useState([
    // PRODUTOS PARA TESTE
    {
      value: 299.99,
      name: "Tenis 1",
      image: './assets/boots/1b.jpg',
      id: 1
    },
    {
      value: 199.99,
      name: "Tenis 2",
      image: './assets/boots/2b.jpg',
      id: 2
    },
    {
      value: 99.99,
      name: "Tenis 3",
      image: './assets/boots/4b.jpg',
      id: 3
    }
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

  return (
    <>
      <Header />
      <Carousel />
      {products.map(product => <ItemComponent
        key={product._id} item={product}
        products={products}
      />)}

    </>
  )
}
