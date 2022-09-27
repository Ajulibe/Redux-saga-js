import styled from "@emotion/styled";
import { Input } from "@chakra-ui/react";

//TEXT INPUT
export const TextInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
  label {
    font-size: 1.6rem;
    margin-right: 4rem;
    width: 50px;
    @media only screen and (max-width: 500px) {
      text-align: left;
    }
  }
  input {
    text-indent: 4px;
    font-size: 1.6rem;
  }
  .input__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const TextInputBox = styled(Input)`
  outline: none;
  width: 100%;
  font-size: 16px;
  height: 40px;
  border-radius: 4px;
  margin-top: 0.8rem;
  text-indent: 1.3rem;
  transition: border-color 0.5s ease;
`;

export const ErrorSpan = styled.p`
  font-size: 12px !important;
  color: red !important;
  margin: 5px 0 0;
`;
