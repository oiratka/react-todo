import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BackgroundImage = () => {
    const location = useLocation();

    useEffect(() => {
        let backgroundImage = '';
        if (location.pathname === '/'){
            backgroundImage = "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
        } else if (location.pathname === '/new'){
            backgroundImage = "url(https://plus.unsplash.com/premium_photo-1683309563562-aa3cfde9ed10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
        }

        document.body.style.backgroundImage = backgroundImage;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";

        return () => {
            document.body.style.backgroundImage = '';
        }
    }, [location]);

    return null;
}

export default BackgroundImage;