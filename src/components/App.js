import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import MainScreen from './pages/MainScreen'

import Cart from './Cart'
import UserContext from "../contexts/userContext";

import ItemComponent from './ItemComponent'



function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signUp' element={<RegisterScreen />} />
          <Route path='/' element={<MainScreen />} />
          <Route path='/test' element={<ItemComponent />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
