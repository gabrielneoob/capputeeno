import styled from "styled-components";

interface FilterItemProps {
  selecetd: boolean;
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const FilterItem = styled.li<FilterItemProps>`
  font-family: "Saira";
  font-weight: ${(props) => (props.selecetd ? "600" : "400")};
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selecetd ? "4px solid var(--orange-low)" : "none"};

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    font-size: 16px;
    line-height: 22px;
  }
`;
