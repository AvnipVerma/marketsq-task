import React from 'react'
import styles from "./Tests.module.css"
import { BsSearch,BsFilter } from 'react-icons/bs'

function Tests() {
  return (
    <div className={styles.container}>
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
    </div>
    <div className={styles.box}>

      <div className={styles.container2}>
        <div className={styles.left}>
        <div className={styles.name}>TEST &nbsp;&nbsp;NAME</div>
      <div className={styles.module}>MODULE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NAME OF MODULE</div>
      <div className={styles.module}>DATE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10/04/2021</div>
      <div className={styles.module}>MARKS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100</div>
      <div className={styles.module}>DURATION:&nbsp;&nbsp;&nbsp;30 MINS</div>
        </div>
        <div className={styles.right}>
      <button className={styles.button}>START </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Tests