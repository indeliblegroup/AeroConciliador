import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pagesConfig } from '@/pages.config';

export default function NavigationTracker() {
    const location = useLocation();
    const { Pages, mainPage } = pagesConfig;
    const mainPageKey = mainPage ?? Object.keys(Pages)[0];

    // Post navigation changes to parent window
    useEffect(() => {
        window.parent?.postMessage({
            type: "app_changed_url",
            url: window.location.href
        }, '*');
    }, [location]);

    // Log user activity when navigating to a page
    useEffect(() => {
        const pathname = location.pathname;
        const pageKeys = Object.keys(Pages);
        const pathSegment = pathname.replace(/^\//, '').split('/')[0];
        pathname === '/' || pathname === '' ? mainPageKey : pageKeys.find(
            key => key.toLowerCase() === pathSegment.toLowerCase()
        );
        // could hook analytics here if needed
    }, [location, Pages, mainPageKey]);

    return null;
}