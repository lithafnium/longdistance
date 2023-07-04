import React, { useState } from "react";
import { Button, Input } from "@app/shared/components/index";
import {
  Container,
  ContainerInner,
  FeatureContainer,
  Sidebar,
  Hamburger,
} from "./styles";
import Feature from "@app/pages/home/components/feature/feature";
import Calendar from "@app/pages/home/components/calendar/calendar";

const Home = () => {
  const [features, setFeatures] = useState<string[]>([]);
  const [feature, setFeature] = useState("");
  const addFeatures = (feature: string) => {
    setFeatures((features) => [...features, feature]);
  };

  const colors = ["#513252", "#7A4069", "#CA4E79", "#FFC18E"];
  return (
    <div>
      <Sidebar>
        <div
          style={{
            padding: "1em",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Hamburger width={30} />
          <Hamburger width={30} />
          <Hamburger width={30} />
        </div>
      </Sidebar>
      <Container>
        <ContainerInner>
          <Calendar />
          <h2>Upcoming Dates</h2>
          <p>
            No upcoming dates! Create a date with your partner to have them show
            here
          </p>
          <h2>Pending Dates</h2>
          <div>
            <Input
              placeholder="Add new date attributes!"
              borderRadius="50px"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addFeatures(feature);
                  setFeature("");
                }
              }}
            />
          </div>
          <FeatureContainer>
            {features.map((f, i) => {
              return <Feature feature={f} color={colors[i % colors.length]} />;
            })}
          </FeatureContainer>
        </ContainerInner>
      </Container>
    </div>
  );
};

export default Home;
