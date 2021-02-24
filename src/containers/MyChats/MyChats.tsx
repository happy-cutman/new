import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
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
  //justify-content: flex-start;
  width: 90%;
  margin: 25px auto 0 auto;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;

  &.active {
    text-decoration: underline;
    text-decoration-color: #ffffff;
  }
  &:hover {
    color: #E44B05;
  }
`;


const MyChats = () => {
    return (
        <>
            <SubTitleContainer>
                <SubTitle>
                    My Chats
                </SubTitle>
            </SubTitleContainer>
            <LinksContainer>
                <div>
                    <StyledLink to={'/my-chats/about-my-ads'}>
                        About my ads
                    </StyledLink>
                    <StyledLink to={'/my-trades/about-other-ads'}>
                        About other ads
                    </StyledLink>
                </div>
            </LinksContainer>
            <Table/>
        </>
    );
};

export default MyChats;