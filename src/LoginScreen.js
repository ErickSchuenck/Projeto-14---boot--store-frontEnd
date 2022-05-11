import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";


export default function LoginScreen() {
  return (
    <div className='container'>
      <img src={'../logo.png'} alt={'logo'}></img>
      <h1>Flex Shoes</h1>
      <input
        type={'text'}
        placeholder={'login'}
      />
      <input
        type={'text'}
        placeholder={'senha'}
      />
      <button>Entrar</button>
    </div>
  )
}
