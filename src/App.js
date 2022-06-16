import React from 'react';
import { Counter } from './features/counter/Counter';
import styles from './app.scss';
import { MyTower } from './Components/MyTower/MyTower';
import Menu from './Pages/Menu';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard/Dashboard';
import Promo from './Pages/Promo/Promo';
import Statistics from './Pages/Statistics/Statistics';
import Bonus from './Pages/Bonus/Bonus';

function App() {
  const [account, setAccount] = React.useState();
  const [menuClicked, setMenuClicked] = React.useState(false);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/menu" element={<Menu />} /> <Route path="/mytower" element={<MyTower />} />{' '}
          <Route path="/dashboard" element={<Dashboard />} />{' '}
          <Route path="/promo" element={<Promo />} />{' '}
          <Route path="/statistics" element={<Statistics />} />{' '}
          <Route path="/bonus" element={<Bonus />} />{' '}
        </Routes>{' '}
        {/* {menuClicked ? <Menu setMenuClicked={(m) => setMenuClicked(m)} /> : <MyTower />} */}{' '}
      </div>{' '}
    </>
  );
}

export default App;
