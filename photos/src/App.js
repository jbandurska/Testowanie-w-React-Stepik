import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Whoops404 from './Whoops404';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
