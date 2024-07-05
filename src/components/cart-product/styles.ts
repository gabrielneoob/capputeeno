import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  max-width: 750px;
  margin-bottom: 1.5rem;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  img {
    border-radius: 10px 0 10px 0;
    @media (max-width: 800px) {
      border-radius: 10px 10px 0 0;
    }
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const ProductDetials = styled.div`
  border-radius: 0 10px 10px 0;
  background-color: white;
  flex: 1.7;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;

    svg {
      cursor: pointer;
    }
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    p {
      font-family: Saira;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: #09090a;
    }
  }

  h3 {
    font-family: Saira;
    font-size: 20px;
    font-weight: 300;
    color: var(--text-dark-2);
  }

  p:nth-child(2) {
    font-family: Saira;
    font-size: 12px;
    font-weight: 400;
    color: var(--text-dark-2);
  }

  @media (max-width: 800px) {
    border-radius: 0 0 10px 10px;
  }
`;
