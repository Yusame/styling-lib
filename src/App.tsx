import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Tailwind from './pages/tailwind';
import Themeui from './pages/themeui';

export default function App(): React.ReactElement {
  return (
    <>
      <BrowserRouter >
        <nav>
          <Link to="/themeui">ThemeUi</Link> |{' '}
          <Link to="/tailwind">Tailwindcss</Link>
        </nav>
        <Routes>
          <Route path="/"/>
          <Route path="/themeui" element={<Themeui/>}/>
          <Route path="/tailwind" element={<Tailwind/>}/>
        </Routes>
      </BrowserRouter >
    </>
  );
}