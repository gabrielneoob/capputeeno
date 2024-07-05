import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 32px;

    img {
      max-width: 640px;
      width: 50%;
    }

    > div {
      display: flex;
      flex-direction: column;
      height: 520px;
      justify-content: space-between;
    }

    @media (max-width: 800px) {
      flex-direction: column;
      margin: 0 1rem;
      img {
        max-width: 500px;
        width: 100%;
      }
      > div {
        height: auto;
        width: auto;
      }
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 450px;

  span {
    font-weight: 400;
    color: #41414d;
  }

  h2 {
    font-size: 32px;
    color: #41414d;
    margin-top: 12px;
    font-weight: 400;
  }

  span:nth-of-type(2) {
    color: #09090a;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 4rem;
    color: (--text-dark);
  }

  div {
    h3 {
      text-transform: uppercase;
      color: var(--text-dark);
      font-weight: 500;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const BuyBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  padding: 10px 0;
  background: var(--brand-blue);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
