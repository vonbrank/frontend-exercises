import React, { useState, useRef, useEffect } from "react";
import { useHasBeenOnScreen } from "../../utils/hooks";

const LazyLoadImage = ({ src, "data-src": dataSrc, alt, className }) => {
    const [imgOnload, setImgOnload] = useState(false);
    const [targetSrc, setTargetSrc] = useState(src);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    const handleOnload = () => {
        if (targetSrc == dataSrc) setImgOnload(true);
    };

    const ref = useRef();
    const hasBeenOnscreen = useHasBeenOnScreen(ref);
    if (hasBeenOnscreen != hasBeenVisible) setHasBeenVisible(true);
    useEffect(() => {
        if (hasBeenVisible) setTargetSrc(dataSrc);
    }, [hasBeenVisible]);

    return (
        <>
            <img
                ref={ref}
                src={targetSrc}
                data-src={dataSrc}
                alt={alt}
                className={`${className} ${imgOnload ? "" : "lazy"}`}
                onLoad={handleOnload}
            />
        </>
    );
};

export default LazyLoadImage;
