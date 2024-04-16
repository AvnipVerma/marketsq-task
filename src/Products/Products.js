import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import styles from "./Products.module.css";
import { BsSearch, BsFilter } from 'react-icons/bs';

function Products() {
  return (
    <div>
      <Navbar />
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
      
    <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.content}>
          <div className={styles.text1}>Product Name</div>
          <div className={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting<br />
            industry. Lorem Ipsum has been the industry's standard dummy text<br />
            ever since the 1500s, when an unknown printer took a galley of<br />
            type and scrambled it to make a type specimen book. It has<br />
            survived not only five centuries, but also the leap into<br />
            electronic typesetting, remaining essentially unchanged.</div>
            <div className={styles.price}>$1500</div>
          <div className={styles.buttonbro}>
            <button className={styles.practice}>PRACTICE</button>
          </div>
        </div>
      </div>
      <div className={styles.line}></div> 
    <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.content}>
          <div className={styles.text1}>Product Name</div>
          <div className={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting<br />
            industry. Lorem Ipsum has been the industry's standard dummy text<br />
            ever since the 1500s, when an unknown printer took a galley of<br />
            type and scrambled it to make a type specimen book. It has<br />
            survived not only five centuries, but also the leap into<br />
            electronic typesetting, remaining essentially unchanged.</div>
            <div className={styles.price}>$1500</div>
          <div className={styles.buttonbro}>
            <button className={styles.practice}>PRACTICE</button>
          </div>
        </div>
      </div>
      <div className={styles.line}></div> 
    <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.content}>
          <div className={styles.text1}>Product Name</div>
          <div className={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting<br />
            industry. Lorem Ipsum has been the industry's standard dummy text<br />
            ever since the 1500s, when an unknown printer took a galley of<br />
            type and scrambled it to make a type specimen book. It has<br />
            survived not only five centuries, but also the leap into<br />
            electronic typesetting, remaining essentially unchanged.</div>
            <div className={styles.price}>$1500</div>
          <div className={styles.buttonbro}>
            <button className={styles.practice}>PRACTICE</button>
          </div>
        </div>
      </div>
      <div className={styles.line}></div> 
    <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.content}>
          <div className={styles.text1}>Product Name</div>
          <div className={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting<br />
            industry. Lorem Ipsum has been the industry's standard dummy text<br />
            ever since the 1500s, when an unknown printer took a galley of<br />
            type and scrambled it to make a type specimen book. It has<br />
            survived not only five centuries, but also the leap into<br />
            electronic typesetting, remaining essentially unchanged.</div>
            <div className={styles.price}>$1500</div>
          <div className={styles.buttonbro}>
            <button className={styles.practice}>PRACTICE</button>
          </div>
        </div>
      </div>
      <div className={styles.line2}></div> 
    </div>
  )
}

export default Products