import React from 'react'
import styled from 'styled-components';

export default function sidebar() {
  return (
    <Sidebar>
      <h1>Ver</h1>
      <h2>Meus pedidos</h2>
      <h1>Ordenar</h1>
      <h2>Menor preço</h2>
      <h2>Maior preço</h2>
      <h2>Mais novos</h2>
      <h2>Mais comprados</h2>
      <h1>Minha Conta</h1>
      <h2>Deletar minha conta</h2>
      <h2>Editar minha conta</h2>
    </Sidebar>
  )
}

const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  background-color: var(--fundo);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 5;
  animation: showSidebar .4s;
  border-right: 1px solid var(--fundo2);

  h1{
    color: black;
    font-family: var(--logoFont);
    margin: 0;
    font-size: 26px;
    margin-top: 60px;
    margin-left: 20px;
    border-bottom: 1px solid gray;
  }

  h2{
    color: black;
    font-family: var(--primaryFont);
    margin-top: 10px;
    font-size: 16px;
    margin-left: 20px;
    cursor: pointer;
    background-color: var(--fundo2);
    padding: 5px;
  }

  h2:hover{
    background-color: var(--highlightColor)
  }

  @keyframes showSidebar{
    from{
      opacity: 0;
      width:0;
    }
    to {
      opacity: 1;
      width: 200px;
    }
  }
`