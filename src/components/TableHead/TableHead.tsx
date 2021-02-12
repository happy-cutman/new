import React from 'react'
import styles from "./TableHead.module.css";


const TableHead = () => {
    return (
        <thead className={styles.tableHead}>
        <tr>
            <th>Trader</th>
            <th>Selling Asset</th>
            <th>Exchange Asset</th>
            <th>Rate <i className="fas fa-exchange-alt"></i></th>
            <th>Limits</th>
            <th>Action</th>
        </tr>
        </thead>
    );
};

export default TableHead;