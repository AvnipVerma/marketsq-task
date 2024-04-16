import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from "./Profile.module.css";
import Tests from "../Tests/Tests";
import QA from "../QA/QA";
import Orders from '../Orders/Orders';

function Profile() {
    const [activeComponent, setActiveComponent] = useState('orders'); // default active component

    const renderComponent = () => {
        switch (activeComponent) {
            case 'tests':
                return <Tests />;
            case 'qa':
                return <QA />;
            default:
                return <Orders />;
        }
    };

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.container2}>
                        <div className={styles.left}>
                            <div className={styles.text}>Amit Jha</div>
                            <div className={styles.text32}>+91774690033</div>
                            <div className={styles.text33}>amit.jha6700@gmail.com</div>
                            <div className={styles.container33}>
                                <button className={styles.button}>EDIT</button>
                                <button className={styles.button}>LOGOUT</button>
                            </div>
                        </div>
                        <div className={styles.line22}></div>
                        <div className={styles.right}>
                            <div className={styles.text4}>ADDRESS</div>
                            <div className={styles.text60}>R107, AJMERA INFINITY</div>
                            <div className={styles.text61}>KARUNA NAGAR, ELECTRONIC CITY</div>
                            <div className={styles.text62}>BANGALORE,INDIA</div>
                            <div className={styles.text63}>PIN:846009</div>
                        </div>
                    </div>
                    <div className={styles.dividerline}></div>
                    <div className={styles.container4}>
                        <button className={styles.button1} onClick={() => setActiveComponent('orders')}>ORDERS</button>
                        <button className={styles.button2} onClick={() => setActiveComponent('tests')}>TESTS</button>
                        <button className={styles.button3} onClick={() => setActiveComponent('qa')}>Q/A</button>
                    </div>
                    <div className={styles.dividerline2}></div>
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
}

export default Profile;
