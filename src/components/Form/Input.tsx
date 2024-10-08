import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { InputSize, applySize } from 'styles/dimensions';

type Orientation = 'horizontal' | 'vertical';

interface Props {
  id: string,
  clase: string,
  value: string,
  label?: string,
  placeholder?: string,
  disabled?: boolean,
  size?: InputSize,
  orientation?: Orientation;
  handleChange: (nweVal: React.ChangeEvent<HTMLInputElement>) => void,
};

type SupportedElements = HTMLInputElement | HTMLLabelElement | HTMLDivElement;
interface StyledInputTypes extends InputHTMLAttributes<SupportedElements> {
  inputSize?: InputSize;
  orientation?: Orientation;
};

const InputContainer = styled.div<StyledInputTypes>`
  display: flex;
  ${props => props.orientation === 'vertical' ? 'flex-direction: column;' : ''};
`;

const StyledInput = styled.input<StyledInputTypes>`
  border: none;
  border-radius: 0.25rem;
  font-family: PTMono;
  box-shadow: 3px 3px 0px black;
  &:focus {
    outline: 1px solid blue}
  }

  ${props => applySize(props.inputSize)};
`;

const StyledLabel = styled.label<StyledInputTypes>`
  color: red;
  ${props => applySize(props.inputSize)};
  padding: 0;
  font-size: 1.6rem;
`;

const Input = (inputProps: Props): JSX.Element => {

  const { id, clase, value, label, placeholder, disabled, size, orientation, handleChange } = inputProps;

  return (
  <InputContainer orientation={orientation}>
    { label && <StyledLabel htmlFor={id} inputSize={size}>{ label }</StyledLabel> }
    <StyledInput
      id={id}
      className={clase}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
      inputSize={size}
    />
  </InputContainer>
  );
};

export default Input;
