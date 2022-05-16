import React, { useContext, useEffect} from 'react'
import Carousel from '../Carousel'
import Header from '../Header'
import ItemComponent from '../ItemComponent'
import UserContext from '../../contexts/userContext';
import axios from 'axios';
import WelcomeHeader from '../WelcomeHeader.js';


export default function MainScreen() {
  const { user, products, setProducts, setProductsInitialList } = useContext(UserContext);


  // BUSCA OS PRODUTOS DO BANCO DE DADOS

  useEffect(() => {
    (async () => {
      try {
        axios.get("https://flexstore-back.herokuapp.com/products")
          .then((response) => {
            setProducts(response.data);
            setProductsInitialList(response.data);
          }).catch(e => console.log(e));
      } catch (e) {
        alert("Erro ao receber dados de produtos");
        console.log(e.response);
      }
    })();
  }, [setProducts,setProductsInitialList]);


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
      {
        products.map(product => <ItemComponent
          key={product._id} item={product}
          products={products}
        />)
      }

    </>
  )
}
