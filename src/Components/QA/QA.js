import React from 'react'
import styles from "./QA.module.css";
import { BsSearch, BsFilter } from 'react-icons/bs'
function QA() {
    return (
        <div className={styles.container}>
            <div className={styles.container88}>
                <div className={styles.searchContainer}>
                    <div className={styles.insideContainer}>
                        <div className={styles.iconWrapper}>
                            <BsSearch className={styles.searchIcon} />
                        </div>
                        <input type="text" placeholder="Search..." className={styles.searchInput} />
                        <div className={styles.iconWrapper}>
                            <BsFilter className={styles.filterIcon} />
                        </div>
                    </div>
                
                <div className={styles.or}>or</div>
                <div className={styles.buttonhere}>
                    <button className={styles.button}>ASK A NEW QUESTION</button>
                </div>
                </div>
            </div>
            <div className={styles.box}>

                <div className={styles.container2}>
                    <div className={styles.left}>
                        <div className={styles.name}>QUESTION &nbsp;&nbsp;TITLE</div>
                        <div className={styles.module}>MODULE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NAME OF MODULE</div>
                        <div className={styles.module}>DATE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10/04/2021</div>
                    </div>
                    <div className={styles.right}>
                        <button className={styles.button}>VIEW REPLY </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QA