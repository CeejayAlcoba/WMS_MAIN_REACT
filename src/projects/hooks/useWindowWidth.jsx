import { useEffect, useState } from "react";

export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState();
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener to listen for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    return{windowWidth}
}