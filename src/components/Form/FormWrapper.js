import { useState } from 'react';
import styled from 'styled-components';
import FormList from './FormList';
import FormPageView from './FormPageView';
import FormPrice from './FormPrice';
import FormSlider from './FormSlider';
import FormSubmit from './FormSubmit';
import FormSwitch from './FormSwitch';

const Form = styled.form`
  background: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 1.25rem 1.875rem -0.3125rem rgba(127, 137, 185, 0.152073);
  margin-left: auto;
  margin-right: auto;
  max-width: 20.5rem;
  padding: 2.25rem 0.75rem 2rem;
  margin-bottom: 5.5rem;
  overflow: hidden;

  @media (min-width: 37.5em) {
    max-width: 33.75rem;
  }
`;

const IntroWrapper = styled.div`
  @media (min-width: 37.5em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 27.75em;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  & > * {
    &:nth-child(2) {
      @media (min-width: 37.5em) {
        grid-column: span 2;
      }
    }

    &:nth-child(3) {
      @media (min-width: 37.5em) {
        grid-row: 1;
        grid-column: 2;
      }
    }
  }
`;

const SubmitWrapper = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 28rem;
  padding-top: 1.5rem;
  position: relative;

  &::before {
    content: '';
    display: block;
    height: 0.0625rem;
    width: 200%;
    background: var(--grey);
    position: absolute;
    top: 0;
    left: -3rem;
    right: -3rem;
  }

  @media (min-width: 37.5em) {
    grid-template-columns: 1fr 10.625rem;
    align-items: center;
    margin-left: 2.375rem;
    padding-top: 2rem;
  }
`;

const FormWrapper = () => {
  const [value, setValue] = useState(3);
  const [discount, setDiscount] = useState(false);

  return (
    <Form action="/" onSubmit={(e) => e.preventDefault()}>
      <IntroWrapper>
        <FormPageView views={value} />
        <FormSlider value={value} setValue={setValue} />
        <FormPrice price={value} discount={discount} />
      </IntroWrapper>
      <FormSwitch value={discount} setValue={setDiscount} />
      <SubmitWrapper>
        <FormList />
        <FormSubmit />
      </SubmitWrapper>
    </Form>
  );
};

export default FormWrapper;
