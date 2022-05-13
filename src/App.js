import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import MainScreen from './MainScreen'
import ItemComponent from './ItemComponent'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/signUp' element={<RegisterScreen />} />
        <Route path='/' element={<MainScreen />} />
        <Route path='/test' element={<ItemComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
