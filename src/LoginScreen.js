import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Loading from './Loading'




export default function LoginScreen() {

  // consts
  const [hidePassword, setHidePassword] = useState(true)
  const [loading, setLoading] = useState(false)

  //functions

  function enterApp() {
    setLoading(!loading)
    // códigos para enviar o axios
  }

  //functions de componentes html
  function Button() {
    if (loading) {
      return <Loading />
    } else {
      return (
        <button onClick={() => enterApp()}>
          <p>Entrar</p>
        </button>
      )
    }
  }

  // componentes principais

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
        type={hidePassword ? 'password' : 'text'}
        placeholder={'Senha'}
      />
      <Button />

      {
        hidePassword ?
          <div className='show-and-hide-password'
            onClick={() => setHidePassword(!hidePassword)} >
            <ion-icon name="eye-outline" />
            <p >
              Mostrar Senha
            </p>
          </div>
          :
          <div className='show-and-hide-password'
            onClick={() => setHidePassword(!hidePassword)} >
            <ion-icon name="eye-off-outline" />
            <p>
              Esconder Senha
            </p>
          </div>
      }
      <Link to={'/signUp'}>
        <div className='register'>
          <p>Primeira vez? Cadastre-se!</p>
        </div>
      </Link>
    </Container>
  )

}

// styled divs
// styled divs
// styled divs
// styled divs
// styled divs
// styled divs
// styled divs


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .register p{
    font-family: var(--primaryFont);
    color: var(--highlightColorDarker);
  }
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
    background-color: var(--fundo);
  }
  input:focus {
    outline: 0;
  }
  input::placeholder{
    font-family: var(--primaryFont);
    color: black;
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
    margin-bottom: 15px;
    background-color: var(--fundo);
  }
  button p{
    font-family: var(--primaryFont);
  }
  button:hover{
    transform: scale(1.05);
    background-color: var(--highlightColor);
  }
  .show-and-hide-password{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .show-and-hide-password p{
    margin: 0;
    cursor: pointer;
    font-family: var(--primaryFont);
    font-size: 14px;
  }
  .show-and-hide-password ion-icon{
    font-size: 20px;
  }
`
