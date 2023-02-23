import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    
    
      <VStack background="white" borderRadius='lg'>
        
        <Image src={imageSrc} borderRadius='lg'/>
        
        <Heading sb={4} textColor="black" size="sm">{title}</Heading>
        <Text noOfLines={2} textColor="gray" size="sm">
          {description}
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </VStack>
    
    

  );
};

export default Card;
