import { createContext, useContext, useState, useEffect } from 'react';

const ResponsiveContext = createContext(undefined);

export const ResponsiveProvider = ({children}) => {

    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth
            setWindowWidth(width);
        
        };
    
        window.addEventListener('resize', updateDimensions);
    
        return ( () => window.removeEventListener('resize', updateDimensions));
    
      },[width]);
    
      return (
        <ResponsiveContext.Provider>
            {children}
        </ResponsiveContext.Provider>
      );
};

export const useResponsiveContext = () => useContext(ResponsiveContext);



  