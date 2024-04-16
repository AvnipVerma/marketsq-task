import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from "./Login.module.css";
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 
  const Navigate = useNavigate();

  const handleLoginClick = () => {
    login(); 
    Navigate('/profile');
  };

  const handleRegisterClick = () => {
    Navigate('/register');
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box}>
          <input 
            className={styles.input} 
            type="text" 
            placeholder="USERNAME" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            className={styles.input} 
            type="password" 
            placeholder="PASSWORD" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button} onClick={handleLoginClick}>
            LOGIN
          </button>
          <div className={styles.text1}>
            Don't have an Account? 
            <button onClick={handleRegisterClick} className={styles.registerButton}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
