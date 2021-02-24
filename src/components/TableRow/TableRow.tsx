import React from 'react';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';
import styles from './TableRow.module.css'
import {PrimaryBtn, SecondaryBtn} from '../Buttons/Buttons';


// @ts-ignore
const TableRow = ({item}) => {

    return (
        <tbody>
        {/*рендерит TableRow для Board и MyAdverts*/}
            <tr className={styles.tableRow}>
                <td>{item.trader}</td>
                <td>{item.sellingAsset}</td>
                <td>{item.exchangeAsset}</td>
                <td>{item.rate}</td>
                <td>{item.limits}</td>
                <td>
                    <Route path='/' render={() =>
                        <>
                            <SecondaryBtn style={{marginRight: 5}}>
                                <span>Chat</span>
                            </SecondaryBtn>
                            <PrimaryBtn>
                                <span>Buy</span>
                            </PrimaryBtn>
                        </>
                    } exact/>

                    <Route path='/my-adverts' render={() =>
                        <>
                            <PrimaryBtn style={{marginRight: 5}}>
                                <span>Create trade</span>
                            </PrimaryBtn>
                            <SecondaryBtn style={{marginRight: 5}}>
                                <span>Edit</span>
                            </SecondaryBtn>
                            <PrimaryBtn>
                                <span>Delete</span>
                            </PrimaryBtn>
                        </>
                    } exact/>
                </td>
            </tr>
        </tbody>
    );
};

// @ts-ignore
export default TableRow