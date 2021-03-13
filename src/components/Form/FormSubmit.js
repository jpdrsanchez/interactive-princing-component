import styled from 'styled-components';

const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 10.625rem;
  margin-left: auto;
  margin-right: auto;
  background: var(--blue-title);
  appearance: none;
  border: none;
  padding: 0.75rem 1rem 0.8125rem;
  border-radius: 1.25rem;
  font-weight: 800;
  font-size: 0.75rem;
  line-height: 1.333;
  color: var(--very-light-blue);
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const FormSubmit = () => {
  return <Button>Start my trial</Button>;
};

export default FormSubmit;
