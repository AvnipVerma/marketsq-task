import React from 'react'
import styles from "./Orders.module.css";
function Orders() {
  return (
    <div>
        <div className={styles.container2}>
                        <div className={styles.box2}>
                            <div className={styles.left}>
                                <div className={styles.orders}>ORDER #1293</div>
                                <div className={styles.product}>PRODUCT: &nbsp;&nbsp;Sample Book Name</div>
                                <div className={styles.date}>DATE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10/04/2021</div>
                                <div className={styles.container50}>
                                <div className={styles.address}>ADDRESS:</div>
                                <div className={styles.texting}>R107, AJMERA INFINITY<br />
                                    KARUNA NAGAR, ELECTRONIC CITY<br />
                                    BANGALORE,INDIA<br />
                                    PIN:846009</div>
                                </div>
                            </div>
                            <div className={styles.right2}>
                                <button className={styles.button}>VIEW DETAILS</button>
                                <button className={styles.button}>TRACK ORDER</button>
                                <button className={styles.button}>DOWNLOAD INVOICE</button>
                            </div>
                            </div>
                        </div>
                    <div className={styles.container2}>
                        <div className={styles.box2}>
                            <div className={styles.left}>
                                <div className={styles.orders}>ORDER #1293</div>
                                <div className={styles.product}>PRODUCT: &nbsp;&nbsp;Sample Book Name</div>
                                <div className={styles.date}>DATE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10/04/2021</div>
                                <div className={styles.container50}>
                                <div className={styles.address}>ADDRESS:</div>
                                <div className={styles.texting}>R107, AJMERA INFINITY<br />
                                    KARUNA NAGAR, ELECTRONIC CITY<br />
                                    BANGALORE,INDIA<br />
                                    PIN:846009</div>
                                </div>
                            </div>
                            <div className={styles.right2}>
                                <button className={styles.button}>VIEW DETAILS</button>
                                <button className={styles.button}>TRACK ORDER</button>
                                <button className={styles.button}>DOWNLOAD INVOICE</button>
                            </div>
                            </div>
                        </div>

    </div>
  )
}

export default Orders