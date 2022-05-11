import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import MainScreen from './MainScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/signUp' element={<RegisterScreen />} />
        <Route path='/' element={<MainScreen />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
