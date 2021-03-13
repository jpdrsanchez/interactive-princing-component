import styled from 'styled-components';

const List = styled.ul`
  font-size: 0.75rem;
  line-height: 1.333;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 37.5em) {
      justify-content: flex-start;
    }

    &:not(:last-child) {
      margin-bottom: 0.6875rem;
    }

    &::before {
      content: '';
      width: 0.4375rem;
      height: 0.375rem;
      background: url('/images/icon-check.svg') no-repeat center center;
      margin-right: 1rem;
    }
  }
`;

const FormList = () => {
  return (
    <List>
      <li>Unlimited websites</li>
      <li>100% data ownership</li>
      <li>Email reports</li>
    </List>
  );
};

export default FormList;
