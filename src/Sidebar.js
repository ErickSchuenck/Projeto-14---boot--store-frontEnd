import React from 'react'
import styled from 'styled-components';

export default function sidebar() {
  return (
    <Sidebar>
      <h1>Filtros</h1>
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
  z-index: 3;
  animation: showSidebar .4s;
  border-right: 1px solid var(--fundo2);

  h1{
    color: black;
    font-family: var(--primaryFont);
    margin: 0;
    font-size: 20px;
    margin-top: 60px;
    margin-left: 20px;
    border-bottom: 1px solid gray;
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