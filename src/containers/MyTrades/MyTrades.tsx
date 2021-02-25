import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {PrimaryBtn} from '../../GlobalStyles/styles';
import Table from '../../components/Table/Table';


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

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 25px auto 0 auto;
  
  a {
    color: white;
    text-decoration:none;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;
  color: white;

  &.active {
    text-decoration: underline;
    text-decoration-color: #ffffff;
  }
  &:hover {
    color: #E44B05;
  }
`;


const MyTrades = () => {
    return (
        <>
            <SubTitleContainer>
                <SubTitle>
                    My trades
                </SubTitle>
            </SubTitleContainer>
            <LinksContainer>
                <div>
                    <StyledLink to={'/my-trades/open'}>
                        Open
                    </StyledLink>
                    <StyledLink to={'/my-trades/closed'}>
                        Closed
                    </StyledLink>
                </div>
                <PrimaryBtn>
                    <Link to={'/my-trades/new-trade'}>Create trade</Link>
                </PrimaryBtn>
            </LinksContainer>
            <Table/>
        </>
    );
};

export default MyTrades;