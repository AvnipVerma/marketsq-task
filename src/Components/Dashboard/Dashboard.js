import React from 'react'
import styles from "./Dashboard.module.css";
import Navbar from '../Navbar/Navbar';
function Dashboard() {
    return (
        <div className={styles.boss}>
            <Navbar />
            <div className={styles.box1}></div>

            <div className={styles.boxcontainer}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.students}>Top Students</div>
            <div className={styles.line}>
                <div className={styles.allContainer}>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardTop}></div>
                        <div className={styles.cardBottom}>
                            <div className={styles.text1}>Amit Jha</div>
                            <div className={styles.text2}>"Some review submitted by the user about the company"</div>
                        </div>
                    </div>

                </div>
                <div className={styles.allContainer}>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardTop}></div>
                        <div className={styles.cardBottom}>
                            <div className={styles.text1}>Amit Jha</div>
                            <div className={styles.text2}>"Some review submitted by the user about the company"</div>
                        </div>
                    </div>

                </div>
                <div className={styles.allContainer}>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardTop}></div>
                        <div className={styles.cardBottom}>
                            <div className={styles.text1}>Amit Jha</div>
                            <div className={styles.text2}>"Some review submitted by the user about the company"</div>
                        </div>
                    </div>

                </div>
                <div className={styles.allContainer}>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardTop}></div>
                        <div className={styles.cardBottom}>
                            <div className={styles.text1}>Amit Jha</div>
                            <div className={styles.text2}>"Some review submitted by the user about the company"</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.review}>Reviews</div>
            <div className={styles.line}>
                <div className={styles.boxy1}>
                    <div className={styles.amitbro}>Amit Jha</div>
                    <div className={styles.linee}></div>
                    <div className={styles.text3}>Some review submitted by the user about the company</div>
                </div>
                <div className={styles.boxy1}>
                    <div className={styles.amitbro}>Amit Jha</div>
                    <div className={styles.linee}></div>
                    <div className={styles.text3}>Some review submitted by the user about the company</div>
                </div>
                <div className={styles.boxy1}>
                    <div className={styles.amitbro}>Amit Jha</div>
                    <div className={styles.linee}></div>
                    <div className={styles.text3}>Some review submitted by the user about the company</div>
                </div>


            </div>

            <div className={styles.blackContainer}>
                <div className={styles.botttomtext}>
                    <div className={styles.text11}>KARO ABHAYAAS</div>
                    <div className={styles.text11}>SOME TEXT ABOUT SOMETHING</div>
                </div>
                <div className={styles.botttomtext}>
                    <div className={styles.text11}>112,ELECTRONIC CITY</div>
                    <div className={styles.text11}>AND THEN SOME OTHER THING</div>
                </div>
                <div className={styles.botttomtext}>
                    <div className={styles.text11}>BANGLORE INDIA</div>

                    <div className={styles.buttonstyling}>
                        <button className={styles.button}>
                            <div className={styles.contactUs}> CONTACT US </div>
                        </button>
                        <button className={styles.button}>
                            <div className={styles.contactUs}> CONTACT US </div>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dashboard