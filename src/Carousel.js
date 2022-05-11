import React from 'react'
import styled from 'styled-components';


export default function Carousel() {
  return (
    <ItemsWrapper>
      <Item />
      <div className='items'>
        <div className='item'>

          <img src='./assets/propagandas/1.jpg' alt='propaganda 1' />
          <img className='filter' src='./assets/ripped.png' alt='filtro' />
        </div>
        <div className='item'>
          <img src='./assets/propagandas/2.jpg' alt='propaganda 2' />
          <img className='filter' src='./assets/ripped.png' alt='filtro' />
        </div>
        <div className='item'>
          <img src='./assets/propagandas/3.png' alt='propaganda 3' />
          <img className='filter' src='./assets/ripped.png' alt='filtro' />
        </div>
        <div className='item'>
          <img src='./assets/propagandas/4.jpg' alt='propaganda 4' />
          <img className='filter' src='./assets/ripped.png' alt='filtro' />
        </div>
        <div className='item'>
          <img src='./assets/propagandas/5.png' alt='propaganda 5' />
          <img className='filter' src='./assets/ripped.png' alt='filtro' />
        </div>

      </div>
    </ItemsWrapper>
  )
}

function Item() {
  return (
    // <div className='item'>
    //   <img src='./assets/propagandas/6.png' alt='propaganda 6' />
    //   <img className='filter' src='./assets/ripped.png' alt='filtro' />
    // </div>
    null
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
