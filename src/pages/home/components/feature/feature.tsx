import React from "react";
import { FeatureContainer } from "./styles";

import { TiDeleteOutline } from "react-icons/ti";
import { IconContext } from "react-icons";

const Feature = ({ feature, color }: any) => {
  return (
    <FeatureContainer backgroundColor={color}>
      <IconContext.Provider
        value={{
          color: "white",
          className: "global-class-name",
          size: "1.5em",
        }}
      >
        <TiDeleteOutline style={{ cursor: "pointer" }} />
      </IconContext.Provider>
      <p>{feature}</p>
    </FeatureContainer>
  );
};

export default Feature;
