import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from "./AboutUs.module.css";
function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.content}>
          <div className={styles.text2}>Lorem Ipsum is simply dummy text of the printing and <br/>
          typesetting industry. Lorem Ipsum has been the<br/>
           industry's standard dummy text ever since the 1500s,<br/>
            when an unknown printer took a galley of type and<br/>
             scrambled it to make a type specimen book. It has <br/>
             survived not only five centuries, but also the leap<br/>
              into electronic typesetting, remaining essentially<br/>
               unchanged. It was popularised in the 1960s with the<br/>
                release of Letraset sheets containing Lorem Ipsum<br/>
                 passages, and more recently with desktop publishing<br/>
                 software like Aldus PageMaker including versions of<br/>
                  Lorem Ipsum.</div>

        </div>
      </div>
      <div className={styles.container}>
       
        <div className={styles.content}>
          <div className={styles.text2}>Lorem Ipsum is simply dummy text of the printing and <br/>
          typesetting industry. Lorem Ipsum has been the<br/>
           industry's standard dummy text ever since the 1500s,<br/>
            when an unknown printer took a galley of type and<br/>
             scrambled it to make a type specimen book. It has <br/>
             survived not only five centuries, but also the leap<br/>
              into electronic typesetting, remaining essentially<br/>
               unchanged. It was popularised in the 1960s with the<br/>
                release of Letraset sheets containing Lorem Ipsum<br/>
                 passages, and more recently with desktop publishing<br/>
                 software like Aldus PageMaker including versions of<br/>
                  Lorem Ipsum.</div>

        </div>
        <div className={styles.box}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.content2}>
          <div className={styles.text2}>Lorem Ipsum is simply dummy text of the printing and <br/>
          typesetting industry. Lorem Ipsum has been the<br/>
           industry's standard dummy text ever since the 1500s,<br/>
            when an unknown printer took a galley of type and<br/>
             scrambled it to make a type specimen book. It has <br/>
             survived not only five centuries, but also the leap<br/>
              into electronic typesetting, remaining essentially<br/>
               unchanged. It was popularised in the 1960s with the<br/>
                release of Letraset sheets containing Lorem Ipsum<br/>
                 passages, and more recently with desktop publishing<br/>
                 software like Aldus PageMaker including versions of<br/>
                  Lorem Ipsum.</div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs