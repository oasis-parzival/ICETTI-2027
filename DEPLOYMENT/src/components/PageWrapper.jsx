import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageWrapper({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main style={{ position: 'relative', zIndex: 10, minHeight: '60vh' }}>
            {children}
        </main>
    );
}
