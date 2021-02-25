import React from "react";
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';


const HeaderWrapper = styled.header`
  display: grid;
  background-color: #2f2f2f;
  min-height: 80px;
  grid-auto-flow: column;
  grid-gap: 20px;
  padding-right: 30px;
  padding-left: 30px;
`;

const UserContainer = styled.span`
  display: grid;
  justify-content: end;
  align-content: center;
  color: #ffffff;
  font-size: 16px;
  padding-right: 20px;
`;

const NavLinks = styled.div`
  display: grid;
  justify-content: start;
  align-content: center;
  grid-auto-flow: column;
  grid-gap: 20px;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  
  background: #E44B05;
  border-radius: 8px;
  padding: 10px 15px 10px 15px;
  border: none;
  margin-right: 15px;
  
  &:hover {
    background-color: #D54605;
  }
  
  //&.active {
  //  background-color: #282828;
  //}
`;


const Header = () => {
    return (
        <HeaderWrapper>
            <NavLinks>
                <StyledLink to="/adboard">AdBoard</StyledLink>
                <StyledLink to="/my-adverts">MyAdverts</StyledLink>
                <StyledLink to="/my-trades/open">MyTrades</StyledLink>
                <StyledLink to="/my-chats/about-my-ads">My Chats</StyledLink>
                <StyledLink to="/create-advert">Create Advert</StyledLink>
            </NavLinks>
            <UserContainer>
                User Name
            </UserContainer>
        </HeaderWrapper>
    );
};

export default Header;
