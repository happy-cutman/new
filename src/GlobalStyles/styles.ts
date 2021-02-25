import styled from 'styled-components';

export const PrimaryBtn = styled.button`
  background: #E44B05;
  color: #EDEEF2;
  border-radius: 8px;
  padding: 4px 18px 4px 18px;
  border: none;
  
  &:hover {
    background-color: #D54605;
  }
`;

export const SecondaryBtn = styled.button`
  background: #616161;
  color: #EDEEF2;
  border-radius: 8px;
  padding: 4px 18px 4px 18px;
  border: none;
  
  &:hover {
    background-color: #535353;
  }
`;

export const StyledTable = styled.table`
  width: 90%;
  margin: 20px auto 0 auto;
  border-collapse: separate;
  border-spacing: 0 1em;
  padding: 0;
  //table-layout: fixed;
    
  th, td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }
  
  td {
    padding:12px 15px;
    text-align: center;
    font-size:16px;
  }
  
  tr:first-child td:first-child { border-top-left-radius: 10px; }
  tr:first-child td:last-child { border-top-right-radius: 10px; }
  tr:last-child td:first-child { border-bottom-left-radius: 10px; }
  tr:last-child td:last-child { border-bottom-right-radius: 10px; }
`;


export const StyledTableRow = styled.tr`
  background-color: #343434;
  color: #EDEEF2;
  
  a {
    color: white;
    text-decoration:none;
  }
`;

export const PaginateContainer = styled.div`
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
      color: white;
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
