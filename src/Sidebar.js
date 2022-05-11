import React from 'react'
import styled from 'styled-components';

export default function sidebar() {
  return (
    <Sidebar>
      TESTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    </Sidebar>
  )
}


const Sidebar = styled.div`
  width: 200px;
  height: 400px;
  background-color: red;
  position: fixed;
  top: 20px;
  left: 10px;
  z-index: 3;
`