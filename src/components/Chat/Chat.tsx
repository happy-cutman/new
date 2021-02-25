import React from 'react';
import styled from 'styled-components';
import {PrimaryBtn} from '../../GlobalStyles/styles';
import arrow from '../../assets/icons/arrow.png'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 750px;
`;

const Messenger = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 25px 10px;
  height: calc(100% - 50px);
  border-radius: 5px;
  background: #343434;
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
  
  .inputarea {
    display: flex;
    padding: 10px;
    background: #2f2f2f;
  }
  
  .inputarea * {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
  }
  
  .input {
    flex: 1;
    background: url(${arrow}) no-repeat scroll center right 10px;
    background-size: 20px;
    
    //background-color: #282828;
    border-radius: 5px;
    border: none;
    outline: none;
    width: 100%;
    height: 30px;
    margin:0;
    padding-left: 8px;
    color: #bbbbbb;
  }
  
  .input:focus {
    box-shadow: 0 0 1pt 1pt #bbbbbb;
  }
`;

const MessengerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 25px;
  border-radius: 5px 5px 0 0;
  background: #2f2f2f;
  color: #EDEEF2;
`;

const MessengerChat = styled.main`
  flex: 1;
  overflow-y: auto;
  margin-top: 15px;
  padding: 10px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #ddd;
  }
  &::-webkit-scrollbar-thumb {
    background: #bdbdbd;
  }
  
  .left-msg-bubble {
    border-bottom-left-radius: 0;
  }
  
  .right-msg {
    flex-direction: row-reverse;
  }
  
  .right-msg-bubble {
    background: #579ffb;

    color: #fff;
    border-bottom-right-radius: 0;
  }
  
  .right-msg-image {
    margin: 0 0 0 10px;
  }
`;

const Message = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  
  &:last-of-type {
    margin: 0;
  }
`;

const MessageImage = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background: #ddd;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

const MessageBubble = styled.div`
  max-width: 450px;
  padding: 15px;
  border-radius: 15px;
  background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
`;

const MessageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const MessageInfoName = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;

const MessageInfoDate = styled.div`
  font-size: 0.85em;
`;


const Chat = () => {
    return (
        <Wrapper>
            <Messenger>

                <MessengerHeader>
                    {/*/добавить ссылку/*/}
                    <div>
                        <span style={{marginRight: 20}}>
                            <i className="fas fa-long-arrow-alt-left fa-lg"></i>
                        </span>
                        <span>Chat with <strong>Trader Nick 4</strong></span>
                    </div>
                    <div>
                        <span>
                            <strong>Ad:</strong> WBTC/ETH | 55.1 ETH/WBTC <span style={{marginLeft: 15, marginRight: 20}}>0.1 - 100 ETH</span>
                        </span>
                        <span><strong>Ad creator:</strong> you</span>
                    </div>
                    <PrimaryBtn>
                        Create trade
                    </PrimaryBtn>
                </MessengerHeader>

                <MessengerChat>

                    <Message>
                        <MessageImage style={{backgroundImage: 'url(https://www.flaticon.com/svg/vstatic/svg/2586/2586073.svg?token=exp=1614247344~hmac=6c9fc9830b3a1e24b3ccd801d602d0e8)'}}>
                        </MessageImage>
                        <MessageBubble className='left-msg-bubble'>
                            <MessageInfo>
                                <MessageInfoName>Trader Nick 4</MessageInfoName>
                                <MessageInfoDate>22/01/2020, 16:58</MessageInfoDate>
                            </MessageInfo>
                            <div>Hello sirs! I would like to know whether you can change the price...</div>
                        </MessageBubble>
                    </Message>

                    <Message className='right-msg'>
                        <MessageImage className='right-msg-image' style={{backgroundImage: 'url(https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1614247393~hmac=e8d46db45e7d4b847c14518b2a83216d)'}}>
                        </MessageImage>
                        <MessageBubble className='right-msg-bubble'>
                            <MessageInfo>
                                <MessageInfoName>Me</MessageInfoName>
                                <MessageInfoDate>22/01/2020, 18:11</MessageInfoDate>
                            </MessageInfo>
                            <div>thnks for your interest</div>
                        </MessageBubble>
                    </Message>

                    <Message className='right-msg'>
                        <MessageImage className='right-msg-image' style={{backgroundImage: 'url(https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1614247393~hmac=e8d46db45e7d4b847c14518b2a83216d)'}}>
                        </MessageImage>
                        <MessageBubble className='right-msg-bubble'>
                            <MessageInfo>
                                <MessageInfoName>Me</MessageInfoName>
                                <MessageInfoDate>22/01/2020, 18:12</MessageInfoDate>
                            </MessageInfo>
                            <div>Thats a very good deal, thank you. And one more question.... How ,uch would you like to take?</div>
                        </MessageBubble>
                    </Message>

                    <Message>
                        <MessageImage style={{backgroundImage: 'url(https://www.flaticon.com/svg/vstatic/svg/2586/2586073.svg?token=exp=1614247344~hmac=6c9fc9830b3a1e24b3ccd801d602d0e8)'}}>
                        </MessageImage>
                        <MessageBubble className='left-msg-bubble'>
                            <MessageInfo>
                                <MessageInfoName>Trader Nick 4</MessageInfoName>
                                <MessageInfoDate>22/01/2020, 21:03</MessageInfoDate>
                            </MessageInfo>
                            <div>Are you sure? Maybe you can change your mind?</div>
                        </MessageBubble>
                    </Message>
                </MessengerChat>
                <form action='' className='inputarea'>
                    <input type='text' className='input' placeholder='Type your message here...'/>
                    <button style={{display: 'none'}} type='submit'></button>
                </form>
            </Messenger>
        </Wrapper>
    );
};

export default Chat;