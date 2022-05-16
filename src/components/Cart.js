import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components';
import StyledButton from './styledButton';
import UserContext from "../contexts/userContext";

export default function Cart({ onclick }) {
  console.log(JSON.parse(localStorage.getItem("order")))
  const { cartItems, setCartItems } = useContext(UserContext);

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalPriceWithFee, setTotalPriceWithFee] = useState(0)

  function displayTotalPrice() {
    setTotalPrice(cartItems.reduce((a, b) => a + b.value, 0).toFixed(2));
    setTotalPriceWithFee(cartItems.reduce((a, b) => a + b.value, 19.99).toFixed(2))
  }

  useEffect(displayTotalPrice, [cartItems])

  return (
    <ShoppingCart>
      <div className='header'>
        <div className='logo'>
          <img src='./assets/logo-without-background.png' alt='logo' />
        </div>
        <div className='logo-text'>
          <h1>Flex Shoes</h1>
        </div>
        <ion-icon name="close-outline" onClick={onclick} />
      </div>
      <div className='summary'>
        <div className='title'>
          <h1>Resumo <br /> do Pedido</h1>
        </div>
        <div className='infos'>
          <h2>{cartItems.length === 1 ? '1 item' : cartItems.length + ' itens'}</h2>
          <h2>{totalPrice}</h2>
        </div>
        <div className='infos'>
          <h2>Entrega</h2>
          <h2>19.99</h2>
        </div>
        <div className='infos'>
          <h3>Total</h3>
          <h3>{totalPriceWithFee}</h3>
        </div>
        <div className='wrapper'>
          <StyledButton
            text={'Checkout'}
            onclick={() => {
              alert('enviando para o usuário um email com o pedido');
              setCartItems([]);
            }}
          />
          <StyledButton text={'Esvaziar Carrinho'}
            onclick={() => setCartItems([])} />
        </div>
      </div>
      <div className='items-space'>
        <div className='title-cart'>
          <h1>Cart</h1>
        </div>
        <div className='user-items'>
          {cartItems.map((item) => <h1>{item.name}</h1>)}
        </div>
      </div>

    </ShoppingCart>
  )
}

const ShoppingCart = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--fundo);
  animation: showShoppingCart .6s;
  position: relative;
  z-index: 10;
  .user-items{
    height: 100%;
    width: 100%;
  }
  .title-cart{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 60px;
    margin-top: 10px;
    border-bottom: 2px solid gray;
  }
  .items-space{
    position: absolute;
    height: 100%;
    width: calc(100% - 200px);
    display: flex;
    flex-direction: column;
  }
  
  h1{
    margin: 0;
    padding: 0;
    color: black;
    font-family: var(--primaryFont);
    font-size: 24px;
    
  }
  
  h2{
    margin: 0;
    padding: 0;
    color: black;
    font-family: var(--primaryFont);
    font-size: 16px;
    font-weight: 400;
  }

  h3{
    margin: 0;
    padding: 0;
    color: black;
    font-family: var(--primaryFont);
    font-size: 16px;
    font-weight: 800;
  }

  .title{
    margin-left: 25px;
    margin-top: 10px;
    width: 150px;
    display: flex;
    align-items: center;
  }
  .infos{
    margin-left: 25px;
    margin-top: 15px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .wrapper{
    margin-top: 10px;
    margin-left: 12.5px;
  }
  .header{
    width: 100%;
    background-color: var(--fundo);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: 60px;
    position: relative;
  }
  .header ion-icon{
    position: absolute;
    top: 50%;
    right: 30px;
    font-size: 24px;
    transform: translate(0, -50%);
    cursor: pointer;
  }
  .header ion-icon:hover{
    /* transform: scale(1.1); */
    transition-duration: .5s;
    color: var(--highlightColorDarker);
  }
  .logo{
    position: absolute;
    left: 0;
    width: 60px;
    height: 60px;
    background-color: var(--highlightColor);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo img{
    width: 50px;
    height: 50px;
  }
  .summary{
    width: 200px;
    height: 100%;
    background-color: var(--fundo2);
    position: absolute;
    right: 0;
  }
  .logo-text {
    position: absolute;
    left: 65px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .logo-text h1{
    font-family: var(--logoFont);
    font-size: 40px;
  }

  @keyframes showShoppingCart{
    from{
      opacity: 0;
      width:0;
      margin-left: 100%;
    }
    to {
      opacity: 1;
      width: 100vw;
      margin-left: 0%;
    }
  }
`