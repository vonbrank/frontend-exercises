import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const scrollOptionsList = {
    up: {
        distance: "8rem",
        origin: "bottom",
        duration: 1000,
        easing: "ease",
    },
    left: {
        distance: `${document.body.offsetWidth / 2}px`,
        origin: "left",
        duration: 1000,
        easing: "ease",
    },
    right: {
        distance: `${document.body.offsetWidth / 2}px`,
        origin: "right",
        duration: 1000,
        easing: "ease",
    },
};

export const ScrollRevealProvider = ({
    children,
    options,
    optionsName,
    className,
}) => {
    const ref = useRef();
    const realOptions = options ? options : scrollOptionsList[optionsName];
    useEffect(() => {
        ScrollReveal().reveal(ref.current, realOptions);
        return () => {
            ScrollReveal().clean(ref.current);
        };
    }, [ref, realOptions]);
    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};
