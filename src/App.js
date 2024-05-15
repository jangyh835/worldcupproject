import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Main } from './components/pages/main/main';
import Result from './components/pages/Reseult/result';


function App() {

  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Navigate to={"/main"} />} />
          <Route exact path='/main' element={<Main />}/>
          <Route exact path='/result' element={<Result />}/>
        </Routes>
    </Router>
  );
}

export default App;
