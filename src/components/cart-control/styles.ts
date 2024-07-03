import styled from "styled-components";

export const CartWrapper = styled.div`
  position: relative;
  width: max-content;
  display: flex;
  cursor: pointer;
`;

export const CartCount = styled.span`
  /* position: absolute;
  z-index: 1;
  bottom: -3px;
  right: -6px; */

  font-family: "Saira";
  line-height: 26px;
  font-weight: 500;
  font-size: 10px;
  margin-left: -10px;
  margin-top: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--delete-color);
  color: #fff;
  width: 17px;
  height: 17px;
  border-radius: 50%;
`;
