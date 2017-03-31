import React  from 'react';

const Loader = ({theme}) => (
  <div
      className={theme.loadWrapper}>
      <div className={theme.load}></div>
      <div className={theme.load}></div>
      <div className={theme.load}></div>
      <div className={theme.load}></div>
      <div className={theme.load}></div>
  </div>
);

export default Loader;
