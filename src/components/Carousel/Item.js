import React from 'react'

export default function Item({ image }) {
  return (
    <div className='item'>
      <img src={image} alt='propaganda 6' />
      <img className='filter' src='./assets/ripped.png' alt='filtro' />
    </div>
  )
}