import React from 'react'
import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/userContext';


export default function WelcomeHeader() {
  const { user } = useContext(UserContext);

  return (
    <H1>
      <h1>Bem vindo {user}</h1>
    </H1>
  )
}

const H1 = styled.div`
  h1{
    font-size: 30px;
    font-family: var(--primaryFont);
    margin: 10px;
    color: var(--highlightColorDarker)
  }
`
