import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Main } from './components/pages/main/main';
import { createContext } from 'react';
import { Ranking } from './components/pages/ranking/ranking';
import Header from './components/pages/header/header';
// import Result from './components/pages/Reseult/result';

export const RankingContext = createContext(null)

function App() {
  const [value,setValue] = useState([])
  return (
    <RankingContext.Provider value={{value,setValue}}>
    <Router>
    <Header/>
        <Routes>
          <Route exact path='/' element={<Navigate to={"/main"} />} />
          {/* 정확한 경로인 /에 이동할 경우 /main page로 이동하는 태그 */}
          <Route exact path='/main' element={<Main />}/>
          {/* <Route exact path='/result' element={<Result />}/> */}
          <Route exact path='/ranking' element={<Ranking />}/>
        </Routes>
    </Router>
    </RankingContext.Provider>
  );
}

export default App;
