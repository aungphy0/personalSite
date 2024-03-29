import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Aung Phyo!";
const bio1 = "Full Stack developer";
// const bio2 = "React for Frontend";
// const bio3 = "Spring for Backend";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* <Avatar size="xl" src='https://i.pravatar.cc/150?img=7' /> */}
    <Avatar size="2xl" src='https://avatars.githubusercontent.com/u/15304571?v=4' />
    <p>{greeting}</p>
    <VStack>
      <Heading>{bio1}</Heading>
      {/* <Heading>{bio2}</Heading>
      <Heading>{bio3}</Heading> */}
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
