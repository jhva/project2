import React from 'react';
import styles from './Button.module.css';
const LoginButton = () => {
  return (
    <div className="loginbox">
      <button className={styles.LoginButton}>로그인</button>
    </div>
  );
};

export default LoginButton;
