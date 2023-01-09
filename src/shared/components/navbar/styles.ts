import styled from "styled-components";
import { device } from "@app/shared/components/layout/layout";

export const NavbarContainer = styled.header`
  width: 100%;
  height: 64px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  padding: 8px;
  /* justify-content: left; */
  z-index: 20;
  position: fixed;
  top: 0;
  background-color: #f6f8fc;
`;

export const NavbarInner = styled.div`
  width: calc(100% - 80px);
  margin-left: 80px;
  max-width: 1080px;
  padding-left: 2em;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  height: 100%;

  // @media ${device.mobileS} {
  //   box-sizing: border-box;
  //   width: 80%;
  // }

  // @media ${device.laptopM} {
  //   padding: 0px 0px;
  //   width: 100%;
  // }
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
`;

export const Links = styled.div`
  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
  }

  & a {
    color: #fefefe !important;
    font-size: 1.1em;
    text-decoration: none;
    transition: 0.2s;
  }

  & a:hover {
    color: rgba(230, 230, 230, 1) !important;
  }

  & a:visited {
    color: black;
  }
`;

export const NavItem = styled.p`
  position: relative;
  color: #ffffff;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;
  transition: 0.2s;
  width: fit-content;
  text-align: center;
`;

export const Brand = styled.h2`
  color: #2b3a55;
  margin: 0px;
`;
