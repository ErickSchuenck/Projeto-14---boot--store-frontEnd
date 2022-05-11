import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


export default function LoginScreen() {
  return (
    <Container>
      <img
        src='./assets/logo-without-background.png' alt='logo' />
      <h1>Flex Shoes</h1>
      <input
        type={'text'}
        placeholder={'Login'}
      />
      <input
        type={'password'}
        placeholder={'Senha'}
      />
      <button>
        <p>Entrar</p>
      </button>

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
    font-family: var(--logoFont);
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
    font-family: var(--primaryFont);
  }
  input:focus {
    outline: 0;
  }
  input::placeholder{
    font-family: var(--primaryFont)
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
  button p{
    font-family: var(--primaryFont)
  }
  button:hover{
    transform: scale(1.05);
    background-color: var(--highlightColor);
  }
`
