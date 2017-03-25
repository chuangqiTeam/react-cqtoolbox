import React  from 'react';
import theme from './theme.css';

const Loader = () => (
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
