import styled from "styled-components";

const Input = styled.input`
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  border-bottom: 1px solid #707070;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.accentPrimary};
  }
`;

export default Input;
