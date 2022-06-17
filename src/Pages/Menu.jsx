import React from 'react';

import styles from './Menu.scss';
import { Link } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import Bonus from './Bonus/Bonus';
import Statistics from './Statistics/Statistics';
import { MyTower } from '../Components/MyTower/MyTower';
import Promo from './Promo/Promo';

const Menu = ({ menuClicked, setMenuClicked }) => {
  return (
    <>
      <div className="menu">
        <Link to="/dashboard">
          <div className="dashboard">Dashboard</div>
        </Link>
        <Link to="/">
          <div className="tower-link">My tower</div>
        </Link>
        <Link to="/bonus">
          <div className="bonus">Bonus</div>
        </Link>
        <Link to="/statistics">
          <div className="statistics">Statistics</div>
        </Link>
        <Link to="/promo">
          <div className="promo">Promo</div>
        </Link>
      </div>
      <div className="close" onClick={() => setMenuClicked(false)}>
        <Link to="/mytower">
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px">
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Menu;
