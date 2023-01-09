import styled from "styled-components";

export const FeatureContainer = styled.div<{
  backgroundColor: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  padding: 5px 15px 5px 12px;
  border-radius: 30px;
  width: fit-content;
  margin-right: 0.5em;
  margin-top: 0.5em;

  display: flex;
  align-items: center;

  & p {
    color: white;
    margin: 0px 0px 0px 8px;
  }
`;
