
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import VerifyCode from './components/VerifyCode';

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verify-code' element={<VerifyCode />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;