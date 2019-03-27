import styled from "styled-components";

const Text = styled.p`
  color: ${({ theme, primary, secondary, colored }) => {
    if (primary) return theme.textPrimary;
    if (secondary) return theme.textSecondary;
    if (colored) return theme.accentPrimary;
    return theme.textPrimary;
  }};
  text-decoration: ${({ strikethrough }) =>
    strikethrough ? " line-through" : "none"};
  font-size: 18px;
  font-weight: 400;
  &::selection {
    background: ${({ theme }) => theme.accentPrimary};
    color: #fff;
  }
  font-style: ${({ italic }) => (italic ? "italic" : "none")};
  font-family: "Open Sans", sans-serif;
`;

const Title = styled.h1`
  &::selection {
    background: ${({ theme }) => theme.accentPrimary};
    color: #fff;
  }
  font-family: "Open Sans", sans-serif;
  font-size: 36px;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;
`;
const Subtitle = styled.h2`
  &::selection {
    background: ${({ theme }) => theme.accentPrimary};
    color: #fff;
  }
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 600;
`;

export { Text, Title, Subtitle };
