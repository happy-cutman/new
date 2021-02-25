import React, {useState} from 'react';
import ReactPaginate from 'react-paginate'
import {Route} from 'react-router'
import styled from 'styled-components'

import TableHead from '../TableHead/TableHead';
import {traders, trades, chats} from '../../data/data';
import TableRow from '../TableRow/TableRow';
import TradesTableRow from '../TableRow/TradesTableRow';
import ChatsTableRow from '../TableRow/ChatsTableRow';


// styles
const StyledTable = styled.table`
  width: 90%;
  margin: 20px auto 0 auto;
  border-collapse: separate;
  border-spacing: 0 1em;
  padding: 0;
  //table-layout: fixed;
  
`;

const StyledPaginateContainer = styled.div`
  ul {
    margin: 0 auto;
    padding: 0;
  }
  .pagination {
    margin-top: 20px;
    display: flex;
    height: 40px;
    list-style: none;
    justify-content: flex-end;
    width: 90%;
  }
  .pagination a {
      padding: 5px 10px 5px 10px;
      margin: 8px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid #E44B05;
  }
  .pagination a:hover {
        background-color: #D54605;
  }
  .pagination a:focus {
        outline: none;
  }
  .paginationActive a {
        background-color: #D54605;
  }
`;
//---------------------------------------


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
                <Route path={['/', '/my-adverts']} render={() => displayUsers} exact/>
                <Route path={['/my-trades/open', '/my-trades/closed']} render={() => displayDeals} exact/>
                <Route path={['/my-chats/about-my-ads', '/my-trades/about-other-ads']} render={() => displayChats} exact/>
            </StyledTable>
            <StyledPaginateContainer>
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
            </StyledPaginateContainer>
        </div>
    );
};

export default Table;