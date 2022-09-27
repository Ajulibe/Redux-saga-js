import styled from "@emotion/styled";

export const EmptyContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 10%;
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin: auto;
  .icon {
    font-size: 4rem;
  }

  .desc {
    max-width: 32.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 4rem;

    .header {
      font-size: 1.8rem;
      font-weight: 500;
      margin-top: 2.1rem;
    }

    .body {
      margin-top: 2.1rem;
      line-height: 2.4rem;
      font-weight: 300;
      font-size: 1.4rem;

      @media only screen and (max-width: 350px) {
        text-align: center;
      }
    }
  }
`;
