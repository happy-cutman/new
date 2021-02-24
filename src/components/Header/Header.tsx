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
                    <Link to="/my-adverts">MyAdverts</Link>
                </button>
                <button>
                    <Link to="/my-trades/open">MyTrades</Link>
                </button>
                <button>
                    <Link to="/my-chats/about-my-ads">My Chats</Link>
                </button>
                <button>
                    <Link to="/create-advert">Create Advert</Link>
                </button>
            </div>
            <span className={styles.userContainer}>
                User Name
            </span>
        </header>
    );
};

export default Header;
