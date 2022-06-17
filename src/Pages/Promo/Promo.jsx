import React from 'react';
import styles from './Promo.scss';
import eng from '../../assets/eng.png';
import chin from '../../assets/chin.png';
import ital from '../../assets/ital.png';
import esp from '../../assets/esp.png';

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo-wrapper">
        <h2>Promo</h2>
        <div className="promo-sel">
          <button className="lang eng">
            <img src={eng} alt="english" />
            <span>English</span>
          </button>
          <button className="lang chin">
            <img src={chin} alt="chinese" />
            <span>Chinese</span>
          </button>
          <button className="lang ital">
            <img src={ital} alt="italian" />
            <span>Italian</span>
          </button>
          <button className="lang esp">
            <img src={esp} alt="espanol" />
            <span>Espanol</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promo;
