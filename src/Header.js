import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <HeaderContainer>
      <ion-icon name="menu-outline" />
      <ion-icon name="search-outline" />
      <div className='logo-container'>
        <img className='logo' alt='logo' src='./assets/logo.png' />
        <p>FLEX</p>
      </div>
      <Link to={'./login'}>
        <ion-icon name="person-outline" />
      </Link>
      <ion-icon name="cart-outline" />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--fundo);
  font-size: 24px;
  .logo-container{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-family: var(--logoFont)
  }
  .logo{
    height: 44px;
  }

`