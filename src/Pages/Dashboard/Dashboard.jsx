import React from 'react';
import profileImg from '../../assets/profile.png';
import styles from './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-field">
      <div className="dashboard-wrapper">
        <img src={profileImg} className="profileImg"></img>
        <div className="profile-id">ID 2277</div>
        <div className="wallet-address">0x7c4c...4f783f</div>
        <button className="copy-btn">copy</button>
        <div className="invited">invited 01.05.2022</div>
        <div className="referral">by ID 1223</div>
        <div className="tower-stat">
          <div className="tower-stat profit">
            <div className="tower-stat-title">TOWER PROFIT</div>
            <div className="tower-stat-profit profit">0.037 BNB</div>
          </div>
          <div className="tower-stat payouts">
            <div className="tower-stat-title">REFERRAL PAYOUTS</div>
            <div className="tower-stat-profit refP">0 BNB</div>
          </div>
          <div className="tower-stat missed">
            <div className="tower-stat-title">MISSED PAYOUTS</div>
            <div className="tower-stat-profit misP">0 BNB</div>
          </div>
        </div>
        <div className="ref-link">
          <div className="ref-link-title">MY PERSONAL LINK</div>
          <div className="link">https://build-tower.game/2277</div>
          <button>Copy</button>
        </div>
        <h2>Tower activities</h2>
        <div className="tower-activity">
          <h3>Build 5 floor</h3>
          <h4>about 1 month ago</h4>
        </div>
        <div className="tower-activity">
          <h3>Build 4 floor</h3>
          <h4>about 1 month ago</h4>
        </div>
        <div className="tower-activity">
          <h3>Build 3 floor</h3>
          <h4>about 1 month ago</h4>
        </div>
        <div className="tower-activity">
          <h3>Build 2 floor</h3>
          <h4>about 1 month ago</h4>
        </div>
        <div className="tower-activity">
          <h3>Got 0.037 BNB rent payment for 1 floor. From ID 3484</h3>
          <h4>about 1 month ago</h4>
        </div>
        <div className="tower-activity">
          <h3>Build 1 floor</h3>
          <h4>about 1 month ago</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
