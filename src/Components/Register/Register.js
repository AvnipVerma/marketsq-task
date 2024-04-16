import React from 'react'
import styles from "./Register.module.css";
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
function Register() {

  const Navigate = useNavigate()

  const handleLoginClick = () => {
    Navigate('/login')
  }
  const handleRegister=()=>{
    Navigate('/login')
  }
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box}>
          <input className={styles.input} type="text" placeholder="NAME" />
          <input className={styles.input} type="password" placeholder="EMAIL" />
          <div className={styles.container2}>
            <div className={styles.container3}><input className={styles.input2} type="text" placeholder="MOBILE NUMBER" /><button className={styles.button2}>SEND OTP</button></div>        
              <div className={styles.text2}>Didn't Recieve it? <button onClick={handleLoginClick} className={styles.ResendButton}>Resend</button></div>
          </div>
          <input className={styles.input3} type="text" placeholder="OTP" />

          <button className={styles.button} onClick={handleRegister}>LOGIN</button>
          <div className={styles.text1}>Don't have an Account? <button onClick={handleLoginClick} className={styles.registerButton}>Register</button></div>
        </div>
      </div>
    </div>
  )
}

export default Register