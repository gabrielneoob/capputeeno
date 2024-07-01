import styled from "styled-components";

export const CardContainer = styled.div`
  /* width: 256px; */

  border-radius: 8px 8px 0px 0px;
  font-family: "Saira";

  img {
    width: 256px;
    height: 100%;

    border-radius: 8px 8px 0 0;
  }

  div:nth-child(1) {
    height: 300px;
  }

  div:nth-child(2) {
    background-color: #ffffff66;
    padding: 0 13px;
  }
`;

export const ProdcutName = styled.p`
  color: #41414d;
  font-family: inherit;
  padding: 7px 0;
  border-bottom: 1px solid #dce2e5;
`;

export const Price = styled.p`
  color: #09090a;
  font-family: inherit;
  font-size: 14px;
  padding: 7px 0;
  font-weight: bold;
`;
