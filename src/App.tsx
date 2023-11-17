import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Pokemon />} path='/pokemon/:id' />
        <Route element={<Navigate to='/' />} path='*' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
