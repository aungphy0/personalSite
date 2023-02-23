import { createContext, useContext, useState, useEffect } from 'react';

const ResponsiveContext = createContext(undefined);

export const ResponsiveProvider = ({children}) => {

    const [width, setWindowWidth] = useState(0);

    useEffect((width) => {
        updateDimensions(); 
    
        window.addEventListener('resize', updateDimensions);
    
        return ( () => window.removeEventListener('resize', updateDimensions));
    
      }, [width]);
    
      const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width);
    
      };

      return (
        <ResponsiveContext.Provider>
            {children}
        </ResponsiveContext.Provider>
      );
};

export const useResponsiveContext = () => useContext(ResponsiveContext);



  