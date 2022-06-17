import React from 'react';
import styles from './Header.scss';
import { Link, Routes, Route } from 'react-router-dom';
import Menu from '../../Pages/Menu';
import Search from '../Search/Search';

export const Header = () => {
  const [searchActive, setSearchActive] = React.useState(false);

  return (
    <div className="header">
      <Search active={searchActive} setActive={setSearchActive} />

      <button className="menu-button">
        <Link to="/menu">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="black"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" fill="white" fillOpacity="0.01" />
            <path
              d="M7.94977 11.9498H39.9498"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.94977 23.9498H39.9498"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.94977 35.9498H39.9498"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </button>
      <div onClick={() => setSearchActive(true)}>
        <button className="search-button">
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
