import React, { useContext } from 'react'
import Carousel from './Carousel'
import Header from './Header'
import ItemComponent from './ItemComponent'

import UserContext from './contexts/userContext';



export default function MainScreen() {
  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Header />
      <Carousel />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
    </>
  )
}
