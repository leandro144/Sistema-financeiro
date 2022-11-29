import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    padding: 4rem;
`;

export const Image = styled.img`
    border-radius: 50%;
    margin: o auto;
    width: 100px;
    heigth: 60px;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #676767;
`;

export const Link = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #202020;
  text-decoration: none;
`;


export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 90%;
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