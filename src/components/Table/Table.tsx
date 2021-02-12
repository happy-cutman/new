import React, {useState} from 'react';
import ReactPaginate from 'react-paginate'

import TableRow from '../TableRow/TableRow';
import TableHead from '../TableHead/TableHead';
import styles from './Table.module.css'

type Data = {
    trader: string,
    sellingAsset: string,
    exchangeAsset: string,
    rate: string,
    limits: string
}


// перенести
const traders: Data[] = [
    {
        trader: 'Nick',
        sellingAsset: 'WBTC',
        exchangeAsset: 'ETH',
        rate: '42.4564 WBTC/ETH',
        limits: '0.01.-2 WBTC'
    },
    {
        trader: 'Frank',
        sellingAsset: 'WBTC',
        exchangeAsset: 'TOKEN A',
        rate: '5644.1 WBTC/TOKEN A',
        limits: '0.01.- 2 WBTC'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
    {
        trader: 'Sara',
        sellingAsset: 'TOKEN C',
        exchangeAsset: 'TOKEN D',
        rate: '312.1 TOKEN C/TOKEN D',
        limits: '10-5000 TOKEN C'
    },
];


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

    // вычисляет кол-во страниц
    const pageCount = Math.ceil(traders.length / usersPerPage);
    // @ts-ignore
    const changePage = ({selected}) => {
        setPageNumber(selected)
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <table className={styles.table}>
                    <TableHead/>
                    {displayUsers}
                </table>
                <ReactPaginate pageCount={pageCount}
                              previousLabel={'Prev'}
                              nextLabel={'Next'}
                              onPageChange={changePage}
                              containerClassName={styles.pagination}
                              previousLinkClassName={'prevBtn'}
                              nextLinkClassName={'nextBtn'}
                              disabledClassName={'disabledBtn'}
                              activeClassName={styles.paginationActive}
                              pageRangeDisplayed={3}
                              marginPagesDisplayed={1}/>
            </div>
        </div>
    );
};

export default Table;