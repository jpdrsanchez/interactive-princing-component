import styled from 'styled-components';

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    color: var(--blue-title);
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.375;
    letter-spacing: -0.05rem;
    margin-right: 0.625rem;

    @media (min-width: 37.5em) {
      font-size: 2.5rem;
      letter-spacing: -0.0625rem;
    }
  }

  span {
    font-size: 0.875rem;
    line-height: 1.35;

    @media (min-width: 37.5em) {
      font-size: 1rem;
      line-height: 1.375;
    }
  }
`;

const FormPrice = ({ price, discount }) => {
  const basePrice = 8;
  const calcPrice =
    price <= 3
      ? basePrice + (price - 1) * 4
      : basePrice + basePrice * (price - 4) + price * 4;
  const totalPrice = discount ? calcPrice - calcPrice * 0.25 : calcPrice;
  return (
    <Text>
      <strong>
        {totalPrice.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </strong>
      <span>/month</span>
    </Text>
  );
};

export default FormPrice;
