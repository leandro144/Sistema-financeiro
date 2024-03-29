import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
    background-color: darkblue;
    height: 150px;
    text-align: center;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
    padding-top: 30px;
`;

export const Body = styled.div`
    margin: auto;
    max-width: 80%;
    margin-bottom: 50px;
    position: relative;
`;

export const Form = styled.form`
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;


export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  border: none;
`;

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
`;