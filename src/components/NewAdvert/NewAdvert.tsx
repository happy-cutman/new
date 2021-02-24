import React from 'react';
import styled from 'styled-components';
import {SecondaryBtn, PrimaryBtn} from '../Buttons/Buttons';


const FormContainer = styled.div`
  //width: 60%;
  //margin-top: 35px;
  //margin-left: 300px
  margin: 35px auto;
  width: 90%;
  max-width: 1170px;
`;

const SubTitle = styled.span`
  color: white;
  font-size: 18px;
  padding: 15px;
`;

const Form = styled.form`
  margin-top: 20px;
  max-width: 768px;
  //background-color: #2f2f2f;
  //width: 68%;
`;

const FormRow = styled.div`
  display: grid;
  align-items:center;
  grid-template-columns: 200px 350px 200px;
  grid-gap: 10px;
`;

const FormLabel = styled.span`
  padding: 15px;
  color: #bbbbbb;
`;

const FormText = styled.span`
  padding: 15px 15px 15px 0;
  color: #bbbbbb;
`;

const FormButtons = styled.div`
  margin-top: 30px;
  display: grid;
  align-items:center;
  grid-template-columns: 300px 150px 150px;
  grid-gap: 40px;
`;

const Input = styled.input`
  background-color: #282828;
  border-radius: 5px;
  border: none;
  outline: none;
  height: 30px;
  margin:0;
  padding-left: 8px;
  color: #bbbbbb;
  
  &:focus {
    box-shadow: 0 0 1pt 1pt #bbbbbb;
  }
`;

const Select = styled.select`
  background-color: #282828;
  border-radius: 5px;
  border: none;
  outline: none;
  height: 30px;
  margin:0;
  padding-left: 8px;
  color: #bbbbbb;
  
  &:focus {
    box-shadow: 0 0 1pt 1pt #bbbbbb;
  }
`;


const NewAdvert = () => {
    return (
        <FormContainer>
            <SubTitle>
                New Advert
            </SubTitle>
            <Form>
                <FormRow>
                    <FormLabel>What do you sell?</FormLabel>
                    <Select>
                        <option value='0'>Select</option>
                        <option value='ETH'>ETC</option>
                        <option value='DAI'>DAI</option>
                        <option value='WBTC'>WBTC</option>
                        <option value='MyToken'>My token</option>
                    </Select>
                </FormRow>
                <FormRow>
                    <FormLabel>What do you want to receive?</FormLabel>
                    <Select>
                        <option value='0'>Select</option>
                        <option value='ETH'>ETC</option>
                        <option value='DAI'>DAI</option>
                        <option value='WBTC'>WBTC</option>
                        <option value='MyToken'>My token</option>
                    </Select>
                </FormRow>
                <FormRow>
                    <FormLabel>Define your price DAI/WBTC</FormLabel>
                    <Input type='text'/>
                    <FormLabel>DAI/WBTC</FormLabel>
                </FormRow>
                <FormRow>
                    <FormLabel>Cross price WBTC/DAI</FormLabel>
                    <FormText>0.002</FormText>
                    <FormLabel>WBTC/DAI</FormLabel>
                </FormRow>
                <FormRow>
                    <FormLabel>Min amount</FormLabel>
                    <Input type='text'/>
                    <FormLabel>DAI</FormLabel>
                </FormRow>
                <FormRow>
                    <FormLabel>Max amount</FormLabel>
                    <Input type='text'/>
                    <FormLabel>DAI</FormLabel>
                </FormRow>
                <FormButtons>
                    <div/>
                    <SecondaryBtn type='submit'>
                        Cancel
                    </SecondaryBtn>
                    <PrimaryBtn>
                        Create advert
                    </PrimaryBtn>
                </FormButtons>
            </Form>
        </FormContainer>
    );
};

export default NewAdvert;