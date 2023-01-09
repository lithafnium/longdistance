import styled from "styled-components";
import { fonts } from "@app/styles/styles";

export const Button = styled.button<{
  color?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
}>`
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  transition: 0.2s;
  text-decoration: none;
  transition: 0.2s;
  border-bottom: white;

  // font-weight: 500;
  border: none;

  & a {
    margin: 0px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
