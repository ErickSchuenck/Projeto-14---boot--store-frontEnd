import React, { useContext, useEffect, useState } from 'react'
import Carousel from '../Carousel'
import Header from '../Header'
import ItemComponent from '../ItemComponent'

import UserContext from '../../contexts/userContext';
import axios from 'axios';



export default function MainScreen() {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  // PRODUTO PARA TESTE
  const testProduct = {
    value: 100,
    name: "Tenis",
    image: './assets/boots/1b.jpg'
  }

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
      {products.map(product => <ItemComponent key={product._id} item={product} />)}
      <ItemComponent item={testProduct} />
      <ItemComponent item={testProduct} />
      <ItemComponent item={testProduct} />
    </>
  )
}
