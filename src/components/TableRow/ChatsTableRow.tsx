import React from 'react';
import {Link, Route} from 'react-router-dom';

// import styles from './TableRow.module.css'
import {PrimaryBtn, SecondaryBtn} from '../Buttons/Buttons';
import styled from 'styled-components';


const StyledTableRow = styled.tr`
  background-color: #343434;
  color: #EDEEF2;
  
  .advert {
    white-space: -o-pre-wrap; 
    word-wrap: break-word;
    white-space: pre-wrap; 
    white-space: -moz-pre-wrap;  
  }
  
  .message {
    max-width: 300px;
  }
    
  td{
    padding:12px 15px;
    text-align: center;
    font-size:16px;
  }

  tr:first-child td:first-child { border-top-left-radius: 10px; }
  tr:first-child td:last-child { border-top-right-radius: 10px; }
  tr:last-child td:first-child { border-bottom-left-radius: 10px; }
  tr:last-child td:last-child { border-bottom-right-radius: 10px; }
`;

// @ts-ignore
const ChatsTableRow = ({item}) => {

    return (
        <tbody>
        {/*рендерит TableRow для Board и MyAdverts*/}
            <StyledTableRow>
                <td>{item.yourCounterparty}</td>
                <td className='advert'>{item.advert}</td>
                <td className='message'>{item.lastMessagePreview}</td>
                <td>{item.lastDate}</td>
                <td>
                    <SecondaryBtn style={{marginRight: 5}}>
                        <span>Answer</span>
                    </SecondaryBtn>
                    <PrimaryBtn>
                        <span>Create trade</span>
                    </PrimaryBtn>
                </td>
            </StyledTableRow>
        </tbody>
    );
};

// @ts-ignore
export default ChatsTableRow