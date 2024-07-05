import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 352px;

  @media (max-width: 800px) {
    width: 279px;
  }

  svg {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;

    @media (max-width: 800px) {
      right: 20px;
    }
  }
`;

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  padding: 0.7rem 1rem;

  background-color: var(--bg-secondary);

  font-family: "Saira";
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--text-dark);
  outline: none;
  border: none;

  @media (max-width: 800px) {
    width: 280px;
  }
`;
