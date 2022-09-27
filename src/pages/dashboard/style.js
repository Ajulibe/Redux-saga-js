import styled from "@emotion/styled";
import COLORS from "styles/colors";

export const Container = styled.div`
  width: 100%;
  padding: 4rem;
  @media only screen and (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
  }
  header {
    font-size: 4.4rem;
    font-weight: bold;
    text-align: left;
  }
  th {
    font-size: 1.6rem;
  }

  .table__wrapper {
    font-size: 1.6rem;
    margin-top: 4rem;
    border-radius: 1rem;
    box-shadow: ${COLORS.shadowGrey} 0px 2px 8px 0px;
  }
  .table__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 1px solid ${COLORS.shadowGrey};
    span {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  .table__overflow {
    height: 70vh;
    overflow: auto;
  }
  .table__spinner-wrapper {
    max-height: 70vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .filter__btn {
    margin-left: 10px;
    font-size: 16px;
  }
  .css-1zts0j {
    text-transform: none;
    font-weight: 500;
  }
  .css-xumdn4 {
    line-height: 24px;
  }
  .sort__icon {
    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }
  }
`;
