import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    padding: 2rem 0;
  }
`;
