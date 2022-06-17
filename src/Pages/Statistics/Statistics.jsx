import React from 'react';
import styles from './Statistics.scss';

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics-wrapper">
        <h2>Statistics</h2>
        <div className="users">
          <h3>Total users</h3>
          <p>6097</p>
        </div>
        <div className="transactions">
          <h3>Total transactions</h3>
          <p>36067</p>
        </div>
        <div className="turnover">
          <h3>Total turnover</h3>
          <p>8256.72 BNB</p>
        </div>
        <h2>Global Activities</h2>
        <div className="activity-block">
          <div className="activity">
            <p>
              <span>User 1</span> Got 0.0007 BNB partner bonus from 2 floor. Partner
              <span>ID 6097</span>
            </p>
            <p className="time">4 days ago</p>
          </div>
          <div className="activity">
            <p>
              <span>User 571</span> Got 0.0056 BNB partner bonus from 2 floor. Partner
              <span>ID 6097</span>
            </p>
            <p className="time">4 days ago</p>
          </div>
          <div className="activity">
            <p>
              <span>User 3049</span> Got 0.0518 BNB partner bonus from 2 floor. Partner
              <span>ID 6097</span>
            </p>
            <p className="time">4 days ago</p>
          </div>
          <div className="activity">
            <p>
              <span>User 6097</span> Build 2 floor
              <span></span>
            </p>
            <p className="time">4 days ago</p>
          </div>
          <div className="activity">
            <p>
              <span>User 1</span> Got 0.0021 BNB partner bonus from 2 floor. Partner
              <span>ID 6097</span>
            </p>
            <p className="time">4 days ago</p>
          </div>
          <button className="load-btn">Load more</button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
