import React from 'react';
import {Link} from 'react-router-dom';

import {PrimaryBtn, SecondaryBtn, StyledTableRow} from '../../GlobalStyles/styles';
import styled from 'styled-components';


const ChatStyledTableRow = styled(StyledTableRow)`
  .advert {
    white-space: -o-pre-wrap; 
    word-wrap: break-word;
    white-space: pre-wrap; 
    white-space: -moz-pre-wrap;  
  }
  
  .message {
    max-width: 300px;
  }
`;

// @ts-ignore
const ChatsTableRow = ({item}) => {

    return (
        <tbody>
            <ChatStyledTableRow>
                <td>{item.yourCounterparty}</td>
                <td className='advert'>{item.advert}</td>
                <td className='message'>{item.lastMessagePreview}</td>
                <td>{item.lastDate}</td>
                <td>
                    <SecondaryBtn style={{marginRight: 5}}>
                        {/*/временная ссылка/*/}
                        <Link to={'/my-chats/chat'}>Answer</Link>
                    </SecondaryBtn>
                    <PrimaryBtn>
                        <span>Create trade</span>
                    </PrimaryBtn>
                </td>
            </ChatStyledTableRow>
        </tbody>
    );
};

// @ts-ignore
export default ChatsTableRow