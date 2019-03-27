import styled from "styled-components";

const Text = styled.p`
  color: ${({ theme, primary, secondary, colored }) => {
    if (primary) return theme.textPrimary;
    if (secondary) return theme.textSecondary;
    if (colored) return theme.accentPrimary;
    return theme.textPrimary;
  }};
  font-size: 18px;
  font-weight: 400;
  &::selection {
    background: ${({ theme }) => theme.accentPrimary};
    color: #fff;
  }
  font-style: ${({ italic }) => (italic ? "italic" : "none")};
  font-family: "Open Sans", sans-serif;
`;

export default Text;
