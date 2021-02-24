import React from 'react'
import {Route} from 'react-router';
import styled from 'styled-components';

const StyledTableHead = styled.thead`
      th {
      padding:12px 15px;
      text-align: center;
      font-size:16px;
      white-space: nowrap;
    }
    
     i {
      font-size: 14px;
      margin-left: 3px;
    }
`;


const TableHead = () => {
    return (
        <StyledTableHead>
            <Route path={['/', '/my-adverts']} render={() =>
                <>
                    <tr>
                        <th>Trader</th>
                        <th>Selling Asset</th>
                        <th>Exchange Asset</th>
                        <th>Rate <i className="fas fa-exchange-alt"></i></th>
                        <th>Limits</th>
                        <th>Action</th>
                    </tr>
                </>} exact/>

            <Route path={['/my-trades/open', '/my-trades/closed']} render={() =>
                <>
                    <tr>
                        <th>Contract</th>
                        <th>Your counterparty</th>
                        <th>You send</th>
                        <th>Your status </th>
                        <th>You receive</th>
                        <th>Counterparty status</th>
                        <th>Rate <i className="fas fa-exchange-alt"></i></th>
                        <th>Deadline</th>
                        <th>Trade creator</th>
                        <Route path={'/my-trades/closed'} render={() => <th>Status</th>}/>
                        <Route path={'/my-trades/open'} render={() => <th>Actions</th>}/>
                    </tr>
                </>
            } exact/>
            <Route path={['/my-chats/about-my-ads', '/my-chats/about-other-ads']} render={() =>
                <tr>
                    <th>Your counterparty</th>
                    <th>Advert</th>
                    <th>Last message preview</th>
                    <th>Last date</th>
                    <th>Actions</th>
                </tr>
            } exact/>
        </StyledTableHead>
    );
};

export default TableHead;