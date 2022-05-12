import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import MainScreen from './MainScreen'
import Cart from './Cart'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/signUp' element={<RegisterScreen />} />
        <Route path='/' element={<MainScreen />} />
        <Route path='/test' element={<Cart />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
