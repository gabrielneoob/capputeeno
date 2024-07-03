import React from "react";
import { Container } from "../../globalStyles";
import BackButton from "../../components/back-button/BackButton";
import { useFilter } from "../../contexts/filter-context/filterContext";

const Payment = () => {
  const { cart } = useFilter();

  return (
    <Container>
      <BackButton path={-1} />
      <div>
        <section>
          <div>
            <span>SEU CARRINHO</span>
            <p>
              TOTAL (3 produtos) <span>R$161,00</span>
            </p>
          </div>
          <ul>
            {cart.map((cartItem) => (
              <li>{cartItem.name}</li>
            ))}
          </ul>
        </section>
        <section></section>
      </div>
    </Container>
  );
};

export default Payment;
