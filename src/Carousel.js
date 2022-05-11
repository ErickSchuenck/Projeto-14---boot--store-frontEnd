import React from 'react'
import styled from 'styled-components';


export default function Carousel() {
  return (
    <ItemsWrapper>
      <div className='items'>
        <div className='item'>
          <img src='./assets/propagandas/1.jpg' alt='propaganda 1' />
        </div>
        <div className='item'>
          <img src='./assets/propagandas/2.jpg' alt='propaganda 2' />
        </div>
        <div className='item'>
          <img src='./assets/propagandas/3.jpg' alt='propaganda 3' />
        </div>
        <div className='item'>
          <img src='./assets/propagandas/4.jpg' alt='propaganda 4' />
        </div>
        <div className='item'>
          <img src='./assets/propagandas/5.png' alt='propaganda 5' />
        </div>
      </div>
    </ItemsWrapper>
  )
}

const ItemsWrapper = styled.div`
  width: 100vw;
  .items{
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
  .item{
    width: 100%;
    height: auto;
    flex: none;
    scroll-snap-align: start;
    margin: 10px;
  }
  .items img{
    width: 100%;
  }
`
