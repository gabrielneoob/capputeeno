import styled from "styled-components";

export const Container = styled.div`
  max-width: 1150px;
  margin: 0 1rem;
  display: flex;
  gap: 2rem;

  div:nth-child(1) {
    flex: 1;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 1rem;
  }
`;

export const CartList = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  span {
    font-weight: 600;
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > p {
      margin-bottom: 1.5rem;
    }
  }
`;

export const PaymentResume = styled.div`
  height: 700px;
  width: 352px;
  background-color: white;
  padding: 1.4rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:nth-child(1) {
    div {
      display: flex;
      justify-content: space-between;
      p,
      span {
        color: var(--text-dark);
      }
    }
  }

  h3 {
    margin-bottom: 1rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    margin-top: 1rem;
    background-color: var(--green);
    color: white;
    border: none;
    padding: 10px 0;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
  }

  ul {
    li {
      color: var(--text-dark);
      margin-bottom: 5px;
      a {
        color: var(--text-dark);
        font-weight: 500;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 550px;
  }
`;

export const Total = styled.div`
  p,
  span {
    font-family: Saira;
    font-weight: 600;
    line-height: 24px;
    color: #41414d;
  }
`;
