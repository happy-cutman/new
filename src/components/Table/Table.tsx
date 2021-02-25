import React, {useState} from 'react';
import ReactPaginate from 'react-paginate'
import {Route} from 'react-router'

import TableHead from '../TableHead/TableHead';
import {traders, trades, chats} from '../../data/data';
import TableRow from '../TableRow/TableRow';
import TradesTableRow from '../TableRow/TradesTableRow';
import ChatsTableRow from '../TableRow/ChatsTableRow';
import {PaginateContainer, StyledTable} from '../../GlobalStyles/styles';



const Table = () => {
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 8;
    const pagesVisited = pageNumber * usersPerPage;

    // рендерит таблицу
    const displayUsers = traders.slice(pagesVisited, pagesVisited + usersPerPage)
        .map((item, index) => {
            return (
                <TableRow key={index} item={item}/>
            )
        });

    const displayDeals = trades.slice(pagesVisited, pagesVisited + usersPerPage)
        .map((item, index) => {
            return (
                <TradesTableRow key={index} item={item}/>
            )
        });

    const displayChats = chats.slice(pagesVisited, pagesVisited + usersPerPage)
        .map((item, index) => {
            return (
                <ChatsTableRow key={index} item={item}/>
            )
        });

    // вычисляет кол-во страниц
    const pageCount = Math.ceil(traders.length / usersPerPage);

    // @ts-ignore
    const changePage = ({selected}) => {
        setPageNumber(selected)
    };

    return (
        <div>
            <StyledTable>
                <TableHead/>
                <Route path={['/adboard', '/my-adverts']} render={() => displayUsers} exact/>
                <Route path={['/my-trades/open', '/my-trades/closed']} render={() => displayDeals} exact/>
                <Route path={['/my-chats/about-my-ads', '/my-chats/about-other-ads']} render={() => displayChats} exact/>
            </StyledTable>
            <PaginateContainer>
                <ReactPaginate pageCount={pageCount}
                               previousLabel={'Prev'}
                               nextLabel={'Next'}
                               onPageChange={changePage}
                               containerClassName='pagination'
                               previousLinkClassName={'prevBtn'}
                               nextLinkClassName={'nextBtn'}
                               disabledClassName={'disabledBtn'}
                               activeClassName='paginationActive'
                               pageRangeDisplayed={3}
                               marginPagesDisplayed={1}
                />
            </PaginateContainer>
        </div>
    );
};

export default Table;