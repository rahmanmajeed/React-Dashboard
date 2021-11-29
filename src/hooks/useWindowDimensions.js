import { useEffect, useState } from "react";

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;

    return {width, height};
}

export default function useWindowDimensions(params) {
    const [dimensions, setDimensions] = useState(getWindowDimensions());
    function handleResize() {
        setDimensions(getWindowDimensions());
    }
    
    useEffect(() => {
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return dimensions;
}