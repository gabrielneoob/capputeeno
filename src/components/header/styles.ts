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
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    padding: 20px 160px;
  }
`;

export const Logo = styled.a`
  font-family: "Saira", sans-serif;
  color: var(--logo-color);
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletBreakPoint}) {
    font-size: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    font-size: 40px;
  }
`;
