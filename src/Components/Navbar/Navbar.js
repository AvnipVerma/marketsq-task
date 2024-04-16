import React, { useState } from 'react';
import { BsPersonFill, BsCartFill } from 'react-icons/bs';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';

function Navbar() {
  const { isAuthenticated } = useAuth();
  const Navigate = useNavigate();
  const [loginBlink, setLoginBlink] = useState(false);

  const navigateTo = (path) => {
    Navigate(path);
  };

  const handleButtonClick = (path) => {
    if (!isAuthenticated) {
      
      setLoginBlink(true);
  
      setTimeout(() => {
        setLoginBlink(false);
        console.log('Login button blinked');
      }, 1000); 
    } else {
      navigateTo(path);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <button className={styles.container3} onClick={() => navigateTo("/")}>
          Karo abhayaas
        </button>
        <div className={styles.container5}>
          <button
            className={!isAuthenticated ? `${styles.container4} ${loginBlink ? styles.blink : ''}` : styles.container4}
            onClick={() => handleButtonClick("/")}
            disabled={!isAuthenticated}
          >
            JOIN US
          </button>
          <button
            className={!isAuthenticated ? `${styles.container6} ${loginBlink ? styles.blink : ''}` : styles.container6}
            onClick={() => handleButtonClick("/classes")}
            disabled={!isAuthenticated}
          >
            Classes
          </button>
          <button
            className={!isAuthenticated ? `${styles.container6} ${loginBlink ? styles.blink : ''}` : styles.container6}
            onClick={() => handleButtonClick("/products")}
            disabled={!isAuthenticated}
          >
            Products
          </button>
          <button
            className={!isAuthenticated ? `${styles.container6} ${loginBlink ? styles.blink : ''}` : styles.container6}
            onClick={() => handleButtonClick("/aboutus")}
            disabled={!isAuthenticated}
          >
            About us
          </button>
          <button 
            className={styles.container7} 
            onClick={() => navigateTo("/login")}
          >
            <BsPersonFill className={styles.icon} />
          </button>
          <button
            className={!isAuthenticated ? `${styles.container6} ${loginBlink ? styles.blink : ''}` : styles.container6}
            onClick={() => handleButtonClick("/cart")}
            disabled={!isAuthenticated}
          >
            <BsCartFill className={styles.icon} />
          </button>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}

export default Navbar;
