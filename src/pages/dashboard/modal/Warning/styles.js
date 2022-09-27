import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const TextWrapper = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;
export const ModalDivider = styled.div`
  border-bottom: 0.5px solid ${COLORS.shadowGrey};
`;

export const ApprovalButtonWrapper = styled.div`
  height: 50px;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  .left__btn {
    margin-right: 24px;
  }
`;
