import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/userContext";
import styled from 'styled-components';
import axios from 'axios';

export default function Sidebar() {

  const { products, setProducts } = useContext(UserContext);
  const {user, setUser} = useContext(UserContext);
  const navigator = useNavigate();

  function orderProducts(type) {
    if (type === 'crescent') {
      setProducts([...products.sort((a, b) => a.value - b.value)])
    }
    if (type === 'decrescent') {
      setProducts([...products.sort((a, b) => b.value - a.value)])
    }
    if (type === 'mostBuys') {
      setProducts([...products.sort((a, b) => b.timesItWasBought - a.timesItWasBought)])
    }
  }

  async function deleteAccount(){
    if(!window.confirm('Tem certeza que quer deletar a conta?')) return;
    try {
        await axios.delete("https://flexstore-back.herokuapp.com/sign-up", {
        headers: {
          "Authorization": `Bearer ${user.token}`
        }
      });

      alert('Conta deletada com sucesso!');
      setUser('');
      navigator("/");
      
    } catch (error) {
      alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
      console.log(error);
    }
  }


  return (
    <SidebarStyle>
      <h1>Ver</h1>
      {user?(
      <Link to={'/myorders'}>
        <h2>Meus pedidos</h2>
      </Link>
      ):(
        <h2 onClick={() => alert('Você precisa entrar para ver seus pedidos!!')}>Meus pedidos</h2>
      )
      }
      <h1>Ordenar</h1>
      <h2 onClick={() => orderProducts('mostBuys')}>Mais Comprados</h2>
      <h2 onClick={() => orderProducts('crescent')}>Menor preço</h2>
      <h2 onClick={() => orderProducts('decrescent')}>Maior preço</h2>
      <h1>Minha Conta</h1>
      <h2 onClick={deleteAccount}>Deletar minha conta</h2>
    </SidebarStyle>
  )
}

const SidebarStyle = styled.div`
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