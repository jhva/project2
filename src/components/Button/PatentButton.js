import React from 'react';
import styles from './Button.module.css';

const PatentButton = () => {
  return (
    <div className="text">
      <button className={styles.Patent}>특허 검색</button>
    </div>
  );
};

export default PatentButton;
