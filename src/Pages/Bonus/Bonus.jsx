import React from 'react';
import styles from './Bonus.scss';

const Bonus = () => {
  return (
    <div className="bonus">
      <div className="bonus-wrapper">
        <h2>Bonus</h2>
        <div className="partners">
          <h4>Partners</h4>
          <p>1</p>
        </div>
        <div className="referrsl-pts">
          <h4>Referral payouts</h4>
          <p>0 BNB</p>
        </div>
        <div className="missed-pts">
          <h4>Missed referral payouts</h4>
          <p>0 BNB</p>
        </div>
        <div className="activities-btns">
          <h2>Bonus activities</h2>
          <div className="btns-flex">
            <button className="first-line">First Line</button>
            <button className="Reward">Reward</button>
          </div>
        </div>
        <div className="activities activity">
          <h5>New partner registered</h5>
          <h6>ID 5466</h6>
          <p>about 1 month ago</p>
        </div>
        <button className="load-btn">Load more</button>
      </div>
    </div>
  );
};

export default Bonus;
