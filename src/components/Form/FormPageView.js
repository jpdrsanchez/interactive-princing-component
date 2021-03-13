import styled from 'styled-components';

const PageView = styled.p`
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1.71429px;
  line-height: 1.33;
  text-transform: uppercase;

  @media (max-width: 37.4375em) {
    text-align: center;
  }

  @media (min-width: 37.5em) {
    font-size: 0.875rem;
    line-height: 1.35;
    letter-spacing: 0.125rem;
  }
`;

const viewsValues = ['10K', '50K', '100K', '500k', '1M'];

const FormPageView = ({ views }) => {
  return <PageView>{viewsValues[views - 1]} Pageviews</PageView>;
};

export default FormPageView;
