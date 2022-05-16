import axios from 'axios'
import styled from 'styled-components';
import { useState, useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Loading from '../Loading'
import StyledButton from '../styledButton'
import UserContext from '../../contexts/userContext';





export default function LoginScreen() {

  // USUÁRIO GUARDADO NO CONTEXT
  const {user, setUser} = useContext(UserContext);
  const navigator = useNavigate();

  // consts
  const [hidePassword, setHidePassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const [login, setLogin] = useState(
    {
      email: '',
      password: '',
    }
  )

  //functions
  async function enterApp(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://flexstore-back.herokuapp.com/sign-in", login);

      setUser(response.data);
      setLoading(!loading);
      navigator("/");
      
    } catch (error) {
      alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
      console.log(error);
    }
  }

  async function logOut(e){
    e.preventDefault();
    try {
        await axios.get("https://flexstore-back.herokuapp.com/sign-out", {
        headers: {
          "Authorization": `Bearer ${user.token}`
        }
      });

      setUser('');
      setLoading(!loading);
      navigator("/");
      
    } catch (error) {
      alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
      console.log(error);
    }
  }

  //functions de componentes html
  function Button() {
    if (loading) {
      return <Loading />
    } else {
      return (
        <StyledButton text='Login' onclick={enterApp} />
      )
    }
  }

  function ShowHidePassword() {
    return (
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
    )
  }

  // componentes principais

  return !user? (
    <Container>
      <img
        src='./assets/logo-without-background.png' alt='logo' />
      <h1>Flex Shoes</h1>
      <input
        type={'text'}
        placeholder={'Email'}
        onChange={(e) => setLogin({ ...login, email: e.target.value })}
      />
      <input
        onChange={(e) => setLogin({ ...login, password: e.target.value })}
        type={hidePassword ? 'password' : 'text'}
        placeholder={'Senha'}
      />
      <ShowHidePassword />

      <Button />
      <Link to={'/signUp'}>
        <div className='link-text'>
          <p>Primeira vez? Cadastre-se!</p>
        </div>
      </Link>
      <Link to={'/'}>
        <div className='link-text'>
          <p>Retornar ao Site</p>
        </div>
      </Link>
    </Container>
  ):(
    <Container>
      <h1>Olá, {user.name}</h1>
      <button>Deletar minha conta</button>
      <button>Editar minha conta</button>
      <button onClick={logOut}>Sair</button>
      <Link to={'/'}>
        <div className='link-text'>
          <p>Retornar ao Site</p>
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
  p{
    margin: 5px;
  }
  .link-text p{
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
    font-size: 18px;
    /* border-radius: 8px; */
    font-family: var(--primaryFont);
    color: var(--fundo);
    background-color: black;
  }
  input:focus {
    outline: 0;
  }
  input::placeholder{
    font-family: var(--primaryFont);
    /* color: black; */
    color: var(--fundo);
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
    margin: 0;
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
