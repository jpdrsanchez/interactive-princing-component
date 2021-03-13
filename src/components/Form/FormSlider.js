import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2.5rem auto;
  max-width: 17.5rem;
  width: 100%;

  @media (min-width: 37.5em) {
    max-width: 27.75em;
  }
`;

const Slider = styled.input`
  appearance: none;
  background: var(--grey);
  border-radius: 0.3125rem;
  width: 100%;
  height: 0.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--green);
    background-image: url('/images/icon-slider.svg');
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 0px 15px 30px rgba(0, 255, 231, 0.6);
    transition: all 0.3s;

    &:hover {
      background-color: var(--green-hover);
    }
  }

  &::-moz-range-thumb {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--green);
    background-image: url('/images/icon-slider.svg');
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 0px 15px 30px rgba(0, 255, 231, 0.6);

    &:hover {
      background-color: var(--green-hover);
    }
  }
`;

const FormSlider = ({ value, setValue }) => {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (focus)
      document.documentElement.style.setProperty('--green-hover', '#24aea1');
    else document.documentElement.style.setProperty('--green-hover', '#7aeadf');
  }, [focus]);

  return (
    <Wrapper>
      <Slider
        aria-label="Page Views"
        type="range"
        name="price"
        id="price"
        min="1"
        max="5"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        style={{
          background: `linear-gradient(90deg, var(--green-input) ${
            25 * (value - 1)
          }%, var(--grey) ${25 * (value - 1)}%)`,
          cursor: focus ? 'grabbing' : 'pointer',
        }}
        onMouseDown={() => setFocus(true)}
        onMouseUp={() => setFocus(false)}
      />
    </Wrapper>
  );
};

export default FormSlider;
