import styled from 'styled-components';

const Header = styled.header`
  padding-bottom: 4rem;
  padding-top: 5.5625rem;
  text-align: center;

  @media (min-width: 37.5em) {
    padding-bottom: 5.75rem;
    padding-top: 6.5rem;
  }

  h1 {
    color: var(--blue-title);
    font-size: 1.25rem;
    font-weight: var(--title-weight);
    line-height: 1.35;
    margin-bottom: 0.5rem;

    @media (min-width: 37.5em) {
      font-size: 1.75rem;
      margin-bottom: 0.75rem;
    }
  }

  h2 {
    font-size: 0.8125rem;
    line-height: 1.77;

    @media (max-width: 37.4375em) {
      margin-left: auto;
      margin-right: auto;
      max-width: 11rem;
    }

    @media (min-width: 37.5em) {
      font-size: 0.9375rem;
      line-height: 1.333;
    }
  }
`;

const Title = () => {
  return (
    <Header>
      <h1>Simple, traffic-based pricing</h1>
      <h2>Sign-up for our 30-day trial. No credit card required.</h2>
    </Header>
  );
};

export default Title;
