import React from "react";
import { Link } from 'react-router-dom'

import styles from "./Header.module.css";


const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.links}>
                <button>
                    <Link to="/">AdBoard</Link>
                </button>
                <button>
                    <Link to="/">MyAdverts</Link>
                </button>
                <button>
                    <Link to="/">MyTrades</Link>
                </button>
                <button>
                    <Link to="/MyChats">My Chats</Link>
                </button>
                <button>
                    <Link to="/CreateAdvert">Create Advert</Link>
                </button>
            </div>
            <span className={styles.userContainer}>
                User Name
            </span>
        </header>
    );
};

export default Header;
