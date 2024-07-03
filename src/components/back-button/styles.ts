import styled from "styled-components";

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem 0;

  p {
    font-weight: 500;
    font-size: 14px;
    color: var(--secondary-text);
  }
`;
