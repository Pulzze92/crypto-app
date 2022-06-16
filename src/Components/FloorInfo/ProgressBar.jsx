import React from 'react';

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: '300px',
    backgroundColor: '#e0e0de',
    borderRadius: 0,
    border: '2px solid black',
    margin: '0 auto',
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'center',
    fontFamily: 'VT323',
  };

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20px',
    verticalAlign: 'middle',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
