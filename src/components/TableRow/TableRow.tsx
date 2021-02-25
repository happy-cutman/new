import React from 'react';
import {Route} from 'react-router-dom';
import {PrimaryBtn, SecondaryBtn, StyledTableRow} from '../../GlobalStyles/styles';


// @ts-ignore
const TableRow = ({item}) => {
    return (
        <tbody>
        {/*рендерит TableRow для Board и MyAdverts*/}
            <StyledTableRow>
                <td>{item.trader}</td>
                <td>{item.sellingAsset}</td>
                <td>{item.exchangeAsset}</td>
                <td>{item.rate}</td>
                <td>{item.limits}</td>
                <td>
                    <Route path='/adboard' render={() =>
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
            </StyledTableRow>
        </tbody>
    );
};

// @ts-ignore
export default TableRow