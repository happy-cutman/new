import React from 'react';
import {Link} from 'react-router-dom';

import styles from './TableRow.module.css'


// @ts-ignore
const TableRow = ({item}) => {
    console.log(item)
    return (
        <tbody>
            <tr className={styles.tableRow}>
                <td>{item.trader}</td>
                <td>{item.sellingAsset}</td>
                <td>{item.exchangeAsset}</td>
                <td>{item.rate}</td>
                <td>{item.limits}</td>
                <td>
                    <button className={styles.chatBtn}>
                        <span>Chat</span>
                    </button>
                    <button className={styles.buyBtn}>
                        <span>Buy</span>
                    </button>
                </td>

            </tr>
        </tbody>
    );
};

export default TableRow;