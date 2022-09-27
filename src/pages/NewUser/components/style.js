import styled from "@emotion/styled";
import colors from "styles/colors";

export const FormWrapper = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media only screen and (max-width: 320px) {
    width: 90%;
  }

  label {
    font-weight: 500;
    font-size: 14px;
    color: ${colors.text};
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .submit {
    margin-left: 20px;
  }
`;
