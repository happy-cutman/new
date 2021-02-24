import React from 'react';
import styled from 'styled-components'
import Table from '../../components/Table/Table';
import {PrimaryBtn} from '../../components/Buttons/Buttons';


const SubTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 35px auto 0 auto;
`;

const SubTitle = styled.span`
  font-size: 18px;
  color: white;
  padding-left: 20px;
`;

const MyAdverts = () => {
    return (
        <>
            <SubTitleContainer>
                <SubTitle>MyAdverts</SubTitle>
                <PrimaryBtn>
                    <span>Create Advert</span>
                </PrimaryBtn>
            </SubTitleContainer>
            <Table/>
        </>
    );
};

export default MyAdverts;