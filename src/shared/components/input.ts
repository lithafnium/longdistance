import styled from "styled-components";
import { colors } from "@app/styles/styles";

export const Input = styled.input<{ borderRadius?: string }>`
  background-color: #ffffff;
  width: 75%;
  border-radius: ${(props) => props.borderRadius};
  // font-size: px;
  text-align: left;
  padding-right: 20px;
  padding-left: 20px;
  height: 30px;
  border: 1px solid #aaaaaa;
  transition: 0.2s;
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  &:focus {
    outline: 0;
    border: 1px solid #7a4069;
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  }
`;
