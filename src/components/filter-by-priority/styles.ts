import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  > p {
    font-family: "Saira";
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PriorityFilter = styled.ul`
  background-color: white;
  border-radius: 4px;
  padding: 0.6rem;
  width: 196px;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  position: absolute;
  bottom: -130px;
  right: 0;

  li {
    color: var(--text-dark);
    font-family: "Saira";
    transition: 0.1s ease-in-out background;

    &:hover {
      background-color: var(--bg-secondary);
    }
  }
`;
