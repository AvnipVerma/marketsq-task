import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from "./Cart.module.css";
import vector from "../../Assets/Vector.png";
function Cart() {
  return (
    <div>
        <Navbar/>
        
        <div className={styles.container}>
          <div className={styles.box}>

            <div className={styles.container2}>
              <div className={styles.text1}>TOTAL: $2000</div>
              <button className={styles.button}>CHECKOUT</button>
              
            </div>
            
            <div className={styles.line}></div>
          
          <div className={styles.box2}>
            <div className={styles.left}>
                <div className={styles.text2}>QUESTION TITLE</div>
                <div className={styles.text3}>MODULE: NAME OF MODULE</div>
                <div className={styles.text3}>DATE: 10/04/2021</div>
            </div>
            
            <div className={styles.right}>
              <button className={styles.button44}>
                <div className={styles.number}>1</div>
                <img src={vector} className={styles.vector} />
              </button>
              <button className={styles.button2}>DELETE</button>
            </div>
          </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default Cart