import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  border-bottom: 1px solid #707070;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.accentPrimary};
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const SmallText = styled.span`
  font-size: 10px;
  position: absolute;
  bottom: 0;
  font-family: "Open Sans", sans-serif;
  color: ${({ full, theme }) => (full ? theme.warning : theme.textSecondary)};
`;

const Input = props => {
  const [value, setValue] = useState(props.placeholder || "");
  const maxLength = 25;
  const onChange = e => {
    props.onChange && props.onChange();
    setValue(e.target.value);
  };

  return (
    <InputContainer>
      <StyledInput
        {...props}
        onChange={onChange}
        maxLength="25"
        value={props.value || value}
      />
      <SmallText full={value.length === maxLength}>
        {value.length}/{maxLength}
      </SmallText>
    </InputContainer>
  );
};

export default Input;
