import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './LoginScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
