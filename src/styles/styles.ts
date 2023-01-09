import styled from "styled-components";

export const colors = {
  PRIMARY: "#FD8440",
  SECONDARY: "#3E533C",
  TERNARY: "#FFF6E9",
  DARK: "#1e3d59",
  HIGHLIGHT: "#17BEBB",
  // HIGHLIGHT: "#41B49D",
  // HIGHLIGHT: "#F46672",
};

export const fonts = {
  // PRIMARY: "Montserrat, sans-serif",
  SECONDARY: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
  // PRIMARY: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu;',
  // SECONDARY: "'Poppins', sans-serif",
};

export const Bold = styled.span`
  font-weight: 600;
  color: ${colors.HIGHLIGHT};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.HIGHLIGHT};
`;
