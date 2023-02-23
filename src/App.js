import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { ResponsiveProvider } from "./context/responsive";


function App() {
  return (
      <ChakraProvider>
        <ResponsiveProvider>
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
        </ResponsiveProvider>
      </ChakraProvider>
    
  );
  
}

export default App;
