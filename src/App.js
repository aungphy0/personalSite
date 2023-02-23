import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useState, useEffect } from 'react';

function App() {

  const [width, setWindowWidth] = useState(window.innerWidth);

  useEffect((width) => {
    updateDimensions(); 

    window.addEventListener('resize', updateDimensions);

    // return () => window.removeEventListener('resize', updateDimensions);

  }, [width]);

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width);

  };
  
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
  
}

export default App;
