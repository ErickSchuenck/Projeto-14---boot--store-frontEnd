import React from 'react'
import styled from 'styled-components';

export default function sidebar() {
  return (
    <Sidebar>

    </Sidebar>
  )
}


const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  /* background-color: var(--fundo); */
  background-image: linear-gradient(to right, var(--fundo) , rgba(0,0,0,0.0));
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 3;
  animation: showSidebar .4s;

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