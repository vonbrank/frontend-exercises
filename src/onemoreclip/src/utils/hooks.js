import { useState, useEffect } from "react";

export function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
    const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
    );

    useEffect(() => {
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, [observer, ref]);

    return isIntersecting;
}

export function useHasBeenOnScreen(ref) {
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setHasBeenVisible(true);
    });

    useEffect(() => {
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, [observer, ref]);

    return hasBeenVisible;
}
