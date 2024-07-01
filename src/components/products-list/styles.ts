import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  justify-content: center;

  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;
`;
