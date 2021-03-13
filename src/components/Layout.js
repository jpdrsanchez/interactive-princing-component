import styled from 'styled-components';

const Main = styled.main`
  background: url('/images/pattern-circles.svg') no-repeat center top 3.5625rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (min-width: 37.5rem) {
    background-position: center top 4.1875rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

const Layout = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Layout;
