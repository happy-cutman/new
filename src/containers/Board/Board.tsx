import React from 'react';

import styles from './Board.module.css'
import Table from '../../components/Table/Table';
import Sidebar from '../../components/Sidebar/Sidebar';


const Board = () => {
    return (
        <div className={styles.wrapper}>
            <Sidebar/>
            <Table/>
        </div>
    );
};

export default Board;