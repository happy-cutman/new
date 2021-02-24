import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 15%) auto;
  grid-template-rows: auto 1fr auto;
`;

const Board = () => {
    return (
        <Wrapper>
            <Sidebar/>
            <Table/>
        </Wrapper>
    );
};

export default Board;