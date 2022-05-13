import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar.js'
import Cart from './Cart.js';
import SearchBar from './SearchBar.js';


export default function Header() {

  const [sidebar, setSidebar] = useState(false);
  function showSidebar() {
    setSidebar(!sidebar)
    setSearchBar(false)
  }

  const [searchBar, setSearchBar] = useState(false);
  function showSearchBar() {
    setSearchBar(!searchBar)
    setSidebar(false)
  }

  const [cart, setCart] = useState(false);
  function showCart() {
    setCart(!cart)
    setSidebar(false)
    setSearchBar(false)
  }

  if (cart === false) {
    return (
      <HeaderContainer>

        <ion-icon name={(!sidebar ? 'menu-outline' : 'close-outline')} onClick={showSidebar} id={'z-index10'} />

        <ion-icon name={(!searchBar ? 'search-outline' : 'close-outline')} onClick={showSearchBar} id={'menu'} />
        {(searchBar ? <SearchBar /> : <></>)}

        <div className='logo-container'>
          <img className='logo' alt='logo' src='./assets/logo.png' />
          <p>FLEX</p>
        </div>

        <Link to={'./login'}>
          <ion-icon name="person-outline" />
        </Link>

        <ion-icon name="cart-outline" onClick={showCart} />
        {(sidebar ? <Sidebar /> : <></>)}

      </HeaderContainer >
    )
  } else {
    return (<Cart onclick={showCart
    } />)
  }
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
        font-family: var(--logoFont);
        position: relative;
  }
        .logo{
          height: 44px;
  }
        ion-icon{
          cursor: pointer;
  }
        .logo-container p:hover{
          cursor: pointer;
        transition-duration: 5s;
        color: var(--highlightColorDarker);
  }
        ion-icon:hover{
        transform: scale(1.1);
        transition-duration: .5s;
        color: var(--highlightColorDarker);
  }
        #menu{
          z-index: 4;
  }
  #z-index10{
    z-index: 10;
  }
`