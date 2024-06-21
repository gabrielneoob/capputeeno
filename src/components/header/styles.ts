import styled from "styled-components";

export const HeaderBackGround = styled.div`
  background-color: #fff;
`;

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1400px;
  padding: 1rem 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }
`;

export const Logo = styled.a`
  font-family: "Saira", sans-serif;
  color: var(--logo-color);
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
`;
