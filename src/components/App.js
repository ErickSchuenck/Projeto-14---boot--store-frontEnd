import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import MainScreen from './pages/MainScreen'
import Cart from './Cart'
import UserContext from "../contexts/userContext";
import ItemComponent from './ItemComponent'
import MyOrders from "./pages/MyOrders";
const cartOrderInitialValue = JSON.parse(localStorage.getItem('order')) || [];



function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState(cartOrderInitialValue);
  useEffect(() => localStorage.setItem("order", JSON.stringify(cartItems)), [cartItems])
  const [products, setProducts] = useState([
    // PRODUTOS PARA TESTE
    {
      value: 299.99,
      name: "Air Max 2023",
      image: './assets/boots/1b.jpg',
      _id: 1,
      description: 'Made from vivid red satin.  It has a sporty appearance.',
      timesItWasBought: 0,
    },
    {
      value: 199.99,
      name: "Low OG Wang",
      image: './assets/boots/2b.jpg',
      _id: 2,
      description: 'Designed in  brown, vivid magenta, dark turquoise, and black.',
      timesItWasBought: 10,
    },
    {
      value: 299.99,
      name: "Tailwind Flex",
      image: './assets/boots/3b.png',
      _id: 3,
      description: 'Made from retro design print fabric',
      timesItWasBought: 0,
    },
    {
      value: 189.99,
      name: "Flex Air SL",
      image: './assets/boots/4b.jpg',
      _id: 4,
      description: 'Woven from white, gray, and rich brown. It is accented with a coordinating band.',
      timesItWasBought: 0,
    },
    {
      value: 379.99,
      name: "Yard Flex 2023",
      image: './assets/boots/5b.jpg',
      _id: 5,
      description: 'Made in whitish colors, perfect for jogging',
      timesItWasBought: 0,
    },
    {
      value: 159.99,
      name: "Retro 2019 collection",
      image: './assets/boots/6b.jpg',
      _id: 6,
      description: 'Made from light gray canvas. It is accented with gold chains.',
      timesItWasBought: 3,
    },
    {
      value: 229.99,
      name: "Flash NF18s",
      image: './assets/boots/7b.jpg',
      _id: 7,
      description: 'Made from wavy fabric designed in white, and light gray.',
      timesItWasBought: 2,
    },
    {
      value: 149.99,
      name: "Taylor C/19",
      image: './assets/boots/8b.jpg',
      _id: 8,
      description: 'Made from polka - dotted fabric, has a sporty appearance.',
      timesItWasBought: 0,
    },
    {
      value: 319.99,
      name: "AllBlack Flex 2023",
      image: './assets/boots/9b.png',
      _id: 9,
      description: '2023 collection designed in black.',
      timesItWasBought: 0,
    },
    {
      value: 199.99,
      name: "NFs Flex c22",
      image: './assets/boots/10b.jpg',
      _id: 10,
      description: 'NFs Limited edition 2022',
      timesItWasBought: 4,
    },
    {
      value: 239.99,
      name: "NcJavo Air",
      image: './assets/boots/11b.png',
      _id: 11,
      description: 'This shoe is made from camo print designed in white, gray, and black',
      timesItWasBought: 0,
    },
    {
      value: 329.99,
      name: "Yng Arsene 33 edition",
      image: './assets/boots/12.jpg',
      _id: 12,
      description: 'Made from paisley print fabric.',
      timesItWasBought: 0,
    },
  ]);
  const [productsInitialList, setProductsInitialList] = useState([
    // PRODUTOS PARA TESTE
    {
      value: 299.99,
      name: "Air Max 2023",
      image: './assets/boots/1b.jpg',
      _id: 1,
      description: 'Made from vivid red satin.  It has a sporty appearance.',
      timesItWasBought: 0,
    },
    {
      value: 199.99,
      name: "Low OG Wang",
      image: './assets/boots/2b.jpg',
      _id: 2,
      description: 'Designed in  brown, vivid magenta, dark turquoise, and black.',
      timesItWasBought: 10,
    },
    {
      value: 299.99,
      name: "Tailwind Flex",
      image: './assets/boots/3b.png',
      _id: 3,
      description: 'Made from retro design print fabric',
      timesItWasBought: 0,
    },
    {
      value: 189.99,
      name: "Flex Air SL",
      image: './assets/boots/4b.jpg',
      _id: 4,
      description: 'Woven from white, gray, and rich brown. It is accented with a coordinating band.',
      timesItWasBought: 0,
    },
    {
      value: 379.99,
      name: "Yard Flex 2023",
      image: './assets/boots/5b.jpg',
      _id: 5,
      description: 'Made in whitish colors, perfect for jogging',
      timesItWasBought: 0,
    },
    {
      value: 159.99,
      name: "Retro 2019 collection",
      image: './assets/boots/6b.jpg',
      _id: 6,
      description: 'Made from light gray canvas. It is accented with gold chains.',
      timesItWasBought: 3,
    },
    {
      value: 229.99,
      name: "Flash NF18s",
      image: './assets/boots/7b.jpg',
      _id: 7,
      description: 'Made from wavy fabric designed in white, and light gray.',
      timesItWasBought: 2,
    },
    {
      value: 149.99,
      name: "Taylor C/19",
      image: './assets/boots/8b.jpg',
      _id: 8,
      description: 'Made from polka - dotted fabric, has a sporty appearance.',
      timesItWasBought: 0,
    },
    {
      value: 319.99,
      name: "AllBlack Flex 2023",
      image: './assets/boots/9b.png',
      _id: 9,
      description: '2023 collection designed in black.',
      timesItWasBought: 0,
    },
    {
      value: 199.99,
      name: "NFs Flex c22",
      image: './assets/boots/10b.jpg',
      _id: 10,
      description: 'NFs Limited edition 2022',
      timesItWasBought: 4,
    },
    {
      value: 239.99,
      name: "NcJavo Air",
      image: './assets/boots/11b.png',
      _id: 11,
      description: 'This shoe is made from camo print designed in white, gray, and black',
      timesItWasBought: 0,
    },
    {
      value: 329.99,
      name: "Yng Arsene 33 edition",
      image: './assets/boots/12.jpg',
      _id: 12,
      description: 'Made from paisley print fabric.',
      timesItWasBought: 0,
    },
  ])


  return (
    <UserContext.Provider value={{ user, setUser, cartItems, setCartItems, products, setProducts, productsInitialList, setProductsInitialList }}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signUp' element={<RegisterScreen />} />
          <Route path='/' element={<MainScreen />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
