import React, {useState} from 'react';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  background-color: #2f2f2f;
  height: 100vh;
`;

const SideBarContent = styled.div`
  padding: 12px 20px 20px 20px;
  
  h1 {
    padding-bottom: 20px;
    color: white;
  }
`;

const Subtitle = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  cursor: pointer;
  color: #bbbbbb;
  
  span {
    padding-bottom: 10px;
  }
`;

const Form = styled.form`
  padding-bottom: 50px;
`;

const SearchContainer = styled.div`
  position:relative;
  padding:0;
  margin:0;
  color: #bbbbbb;
  
  i {
    position:absolute;
    bottom:8px;
    right:5px;
    width:10px;
    height:15px
  }
  
  .search-button {
    position:absolute;
    bottom:8px;
    right:0;
    width:10px;
    height:15px;
    visibility: hidden;
  }
`;

const Search = styled.input`
  background-color: #282828;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 100%;
  height: 30px;
  margin:0;
  padding-left: 8px;
  color: #bbbbbb;
  
  &:focus {
     box-shadow: 0 0 1pt 1pt #bbbbbb;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  position: relative;
  
  input[type='radio']:after {
    width: 10px;
    height: 10px;
    border-radius: 15px;
    position: relative;
    background-color: #282828;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid #D54605;
  }

  input[type='radio']:checked:after {
    width: 10px;
    height: 10px;
    border-radius: 15px;
    position: relative;
    background-color: #E44B05;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid #D54605;
  }
`;

const RadioItem = styled.div`
  padding-bottom: 10px;
  display: flex;
  align-items: baseline;
  
  label {
    font-size: 18px;
    color: #bbbbbb;
  }
  
  input[type='radio'] {
    margin-right: 10px;
    cursor: pointer;
  }
`;


const Sidebar = () => {
    const [selling, setSelling] = useState('');
    const [exchange, setExchange] = useState('');

    const setSellingRadio = (e:any) => {
        setSelling(e.target.value)
    };

    const setExchangeRadio = (e:any) => {
        setExchange(e.target.value)
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    };

    const toggleShow = (id:string) => {
        let form:HTMLElement | null = document.getElementById(id);
        // @ts-ignore
        if (form.style.display === "none") {
            // @ts-ignore
            form.style.display = "block";
        } else {
            // @ts-ignore
            form.style.display = "none";
        }
    };

    return (
        <SideBarWrapper>
            <SideBarContent>
                <h1>Filter</h1>
                <Subtitle onClick={() => toggleShow('sellingDrop')}>
                    <span>Selling Asset</span>
                    <i className="fas fa-chevron-down"></i>
                </Subtitle>

                <Form id='sellingDrop' style={{display: 'block'}} onSubmit={handleSubmit}>

                    <SearchContainer>
                        <button type='submit' className='search-button'></button>
                        <i className="fas fa-search"></i>
                        <Search type='text'/>
                    </SearchContainer>

                    <RadioContainer>
                        <RadioItem>
                            <input type='radio' checked={selling === 'ETC'} value='ETC' onChange={setSellingRadio}/>
                            <label>ETC</label>
                        </RadioItem>
                        <RadioItem>
                            <input type='radio' checked={selling === 'WBTC'} value='WBTC' onChange={setSellingRadio}/>
                            <label>WBTC</label>
                        </RadioItem>
                        <RadioItem>
                            <input type='radio' checked={selling === 'DAI'} value='DAI' onChange={setSellingRadio}/>
                            <label>DAI</label>
                        </RadioItem>
                        <RadioItem>
                            <input type='radio' checked={selling === 'LINK'} value='LINK' onChange={setSellingRadio}/>
                            <label>LINK</label>
                        </RadioItem>
                    </RadioContainer>

                </Form>

                <Subtitle onClick={() => toggleShow('exchangeDrop')}>
                    <span>Exchange Asset</span>
                    <i className="fas fa-chevron-down"></i>
                </Subtitle>

                <Form id='exchangeDrop' style={{display: 'block'}} onSubmit={handleSubmit}>

                    <SearchContainer>
                        <button type='submit' className='search-button'></button>
                        <i className="fas fa-search"></i>
                        <Search type='text'/>
                    </SearchContainer>

                    <RadioContainer>
                        <RadioItem>
                            <input type='radio' checked={exchange === 'ETC'} value='ETC' onChange={setExchangeRadio}/>
                            <label>ETC</label>
                        </RadioItem>
                        <RadioItem>
                            <input type='radio' checked={exchange === 'WBTC'} value='WBTC' onChange={setExchangeRadio}/>
                            <label>WBTC</label>
                        </RadioItem>
                        <RadioItem >
                            <input type='radio' checked={exchange === 'DAI'} value='DAI' onChange={setExchangeRadio}/>
                            <label>DAI</label>
                        </RadioItem>
                        <RadioItem >
                            <input type='radio' checked={exchange === 'LINK'} value='LINK' onChange={setExchangeRadio}/>
                            <label>LINK</label>
                        </RadioItem>
                    </RadioContainer>
                </Form>
            </SideBarContent>
        </SideBarWrapper>
    );
};

export default Sidebar;