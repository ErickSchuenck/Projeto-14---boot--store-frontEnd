import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

import { Link, useNavigate } from "react-router-dom";


export default function LoginScreen() {
  return (
    <Container>
      <img
        src='./assets/logo-without-background.png' alt='logo' />
      <h1>Flex Shoes</h1>
      <input
        type={'text'}
        placeholder={'login'}
      />
      <input
        type={'text'}
        placeholder={'senha'}
      />
      <button><p>Entrar</p></button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  h1{
    font-size: 45px;
  }
  img{
    width: 100px;
    height: auto;
  }
  input{
    margin-bottom: 10px;
    text-align: center;
    cursor: pointer;
    border: none;
    width: 250px;
    height: 26px;
    border-radius: 8px;
  }
  input:focus {
    outline: 0;
  }
  button{
    border: none;
    width: 250px;
    height: 26px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s;
    cursor: pointer;
  }
  button:hover{
    transform: scale(1.05);
    background-color: var(--highlightColor);
  }
`
