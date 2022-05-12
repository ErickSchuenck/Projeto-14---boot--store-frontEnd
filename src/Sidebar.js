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
  background-image: linear-gradient(90deg, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 67%, rgba(255,255,255,0.9) 77%, rgba(255,255,255,0.8) 89%, rgba(255,255,255,0.551779935275081) 100%, rgba(255,255,255,0.7) 100%, rgba(255,255,255,0.35) 100%, rgba(255,255,255,0.25) 144%);
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