import React, { useEffect, useState, useContext } from 'react'
import UserContext from "../contexts/userContext";
import styled from 'styled-components';


export default function ItemComponent({ item }) {

  const { cartItems, setCartItems } = useContext(UserContext);
  const { value, image, name, _id, description } = item;
  const isSelected = cartItems.filter((i) => i._id === _id).length > 0

  function selectProductToCart() {

    if (isSelected) {
      setCartItems((c) => c.filter((i) => i._id !== _id))
    } else {
      setCartItems((c) => [...c, item])
    }
  }


  return (
    <>
      <Wrapper onClick={() => selectProductToCart()}>
        <ComponentImg>
          {isSelected ?
            <ion-icon name="bag-check" />
            :
            <div className='price-tag'>
              <p>{value}</p>
            </div>}
          <img src={image} alt='boot'></img>
        </ComponentImg>
        <ComponentDescription>
          <h1>{name}</h1>
          
          <h2>{isSelected ? 'No carrinho' : 'Comprar'}</h2>
          <h3>{description}</h3>
        </ComponentDescription>
      </Wrapper >
    </>
  )
}

const ComponentImg = styled.div`
width: 144px;
height: 144px;
background-color: var(--fundo);
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
position: relative;
cursor: pointer;
overflow-y: hidden;
p{
  margin: 0;
  font-family: var(--logoFont);
  overflow-y: hidden;
}
.price-tag{
  height: 20px;
  background-color: var(--fundo2);
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5px;
  left: 5px;
  overflow-y: hidden;
}
ion-icon{
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 45px;
  color: var(--highlightColorDarker)
}
img{
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
`
const ComponentDescription = styled.div`
  width: 184px;
  height: 144px;
  h1{
    margin: 0;
    padding: 3px;
    font-family: var(--primaryFont);
    font-size: 25px;
    border-bottom: 1px solid gray;
    overflow-y: hidden;
  }
  h2{
    font-family: var(--primaryFont);
    padding: 3px;
    margin: 0;
    font-size: 14px;
    color: var(--highlightColorDarker);
    overflow-y: hidden;
  }
  h3{
    font-family: var(--primaryFont);
    padding: 3px;
    margin: 0;
    font-size: 14px;
    overflow-y: hidden;
  }
`

const Wrapper = styled.div`
  display: flex;
  overflow-y: hidden;
  margin: 10px;
  
`
