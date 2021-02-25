import React from 'react';
import {Route} from 'react-router-dom';
import {PrimaryBtn, SecondaryBtn, StyledTableRow} from '../../GlobalStyles/styles';
import styled from 'styled-components';


const CancelBtn = styled(SecondaryBtn)`
  padding: 2px 7px 2px 7px
`;

const DepositBtn = styled(PrimaryBtn)`
  padding: 2px 7px 2px 7px;
  background-color: green;
`;

const ApproveBtn = styled(PrimaryBtn)`
  padding: 2px 7px 2px 7px;
  margin-right: 5px
`;

// @ts-ignore
const TradesTableRow = ({item}) => {

    return (
        <tbody>
        {/*рендерит TableRow для MyTrades*/}
            <StyledTableRow>
                <td>{item.contract}</td>
                <td>{item.yourCounterparty}</td>
                <td>{item.youSend}</td>
                <td>{item.yourStatus}</td>
                <td>{item.youReceive}</td>
                <td>{item.counterpartyStatus}</td>
                <td>{item.rate}</td>
                <td>{item.deadline}</td>
                <td>{item.tradeCreator}</td>
                <td>
                    <Route path='/my-trades/open' render={() =>
                        <>
                            <CancelBtn style={{marginRight: 5}}>
                                <span>Cancel</span>
                            </CancelBtn>
                            <ApproveBtn>
                                <span>Approve</span>
                            </ApproveBtn>
                            <DepositBtn>
                                <span>Deposit</span>
                            </DepositBtn>
                        </>
                    } exact/>

                    <Route path='/my-trades/closed' render={() =>
                        <>
                            <span>{item.status}</span>
                        </>
                    } exact/>
                </td>
            </StyledTableRow>
        </tbody>
    );
};

// @ts-ignore
export default TradesTableRow