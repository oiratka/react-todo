import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BackgroundImage = () => {
    const location = useLocation();

    useEffect(() => {
        let backgroundImage = '';
        if (location.pathname === '/'){
            backgroundImage = "url(https://images.unsplash.com/photo-1712000155290-ee65c0a82eda?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
        } else if (location.pathname === '/new'){
            backgroundImage = "url(https://images.unsplash.com/photo-1528938102132-4a9276b8e320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
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