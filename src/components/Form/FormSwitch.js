import { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.label`
  font-size: 0.75rem;
  line-height: 1.333;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2.125rem;
  margin-bottom: 2.375rem;

  @media (min-width: 37.5em) {
    justify-content: center;
  }

  input {
    display: none;
  }

  span {
    &:last-of-type {
      display: flex;
      align-items: center;
      position: relative;

      &::after {
        content: '-25%';
        display: block;
        padding: 0.125rem 0.5rem 0.1875rem 0.4375rem;
        border-radius: 5.625rem;
        font-size: 0.625rem;
        font-weight: 800;
        color: var(--orange);
        background-color: var(--light-orange);
        line-height: 1.4;
        margin-left: 0.3125rem;

        @media (min-width: 37.5em) {
          content: '25% discount';
          position: absolute;
          width: max-content;
          right: -6.375rem;
        }
      }
    }
  }
`;

const Switcher = styled.div`
  background: var(--grey-switch);
  border-radius: 0.9375rem;
  height: 1.375rem;
  width: 2.6875rem;
  margin-right: 0.75rem;
  margin-left: 0.75rem;
  position: relative;
  padding: 0.25rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: var(--green-hover);
  }

  &::before {
    content: '';
    display: block;
    width: 0.875rem;
    height: 0.875rem;
    background: var(--white);
    border-radius: 50%;
    transition: all 0.3s;
    position: absolute;
    left: ${(props) => (props.checked ? '1.5rem' : '.25rem')};
  }
`;

const FormSwitch = ({ value, setValue }) => {
  const handleChange = ({ target }) => {
    setValue(target.checked);
  };

  return (
    <Wrapper>
      <span>Monthly Billing</span>
      <Switcher checked={value} />
      <input
        type="checkbox"
        name="type"
        id="type"
        value="Yearly"
        checked={value}
        onChange={handleChange}
      />
      <span>Yearly Billing</span>
    </Wrapper>
  );
};

export default FormSwitch;
