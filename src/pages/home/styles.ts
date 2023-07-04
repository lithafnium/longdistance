import styled from "styled-components";
import { device } from "@app/shared/components/layout/layout";
import { colors, fonts } from "@app/styles/styles";

export const Container = styled.div`
  width: 100%;
  width: calc(100% - 80px);
  margin-left: 80px;
  display: flex;
  justify-content: center;
  margin-top: 64px;
  padding-top: 2em;
  padding-bottom: 2em;
  // align-items: center;
  min-height: 100vh;

  // background-color: ${colors.TERNARY};
`;

export const ContainerInner = styled.div`
  max-width: 1080px;

  // padding-left: 2em !important;

  @media ${device.mobileS} {
    box-sizing: border-box;
    width: 80%;
  }

  @media ${device.laptopM} {
    padding: 0px 0px;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  @media ${device.mobileS} {
    font-size: 36px;
  }

  @media ${device.tablet} {
    font-size: 72px;
  }
  font-size: 72px;
  margin: 0px;
  font-weight: 700;
  color: ${colors.DARK};
`;

export const Description = styled.p`
  font-family: ${fonts.SECONDARY};
  font-size: 17px;
  margin: 0px;
  margin-bottom: 1em;
  color: ${colors.HIGHLIGHT};
  line-height: 1.1;
`;

export const Paragraph = styled.p`
  font-size: 17px;
  margin: 0px;
  color: #1e3d59;
  line-height: 1.3;
  margin-top: 1em;
`;

export const Inputs = styled.div`
  display: flex;
  width: 100%;
`;

export const Links = styled.div`
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;

  font-family: ${fonts.SECONDARY};
  & a {
    margin-right: 2em;
    margin-bottom: 1em;
    color: ${colors.HIGHLIGHT};
    text-decoration: none;
  }
`;

export const FeatureContainer = styled.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80px;
  background-color: #eaf1fb;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

export const Hamburger = styled.div<{
  width: number;
}>`
  height: 3px;
  border-radius: 5px;
  width: ${(props) => props.width}px;
  background-color: black;
  margin-bottom: 5px;
`;
