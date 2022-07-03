import React from "react";
import LazyLoadImage from "../LazyLoadImage";
import { ScrollRevealProvider } from "../../utils/providers";

const Introduction = ({ data }) => {
    const { title, lines, backgroundImageSrcLazy, backgroundImageSrc } = data;
    return (
        <section className="section-intro">
            <div className="container intro__container">
                <div className="intro__bg-img-box">
                    <LazyLoadImage
                        src={backgroundImageSrcLazy}
                        data-src={backgroundImageSrc}
                        alt="a beautiful girl"
                        className="intro__bg-img"
                    />
                </div>
                <div className="intro">
                    <div className="intro__text">
                        <ScrollRevealProvider optionsName={"left"}>
                            <p className="intro__title">{title}</p>
                        </ScrollRevealProvider>
                        {lines.map((line, index) => (
                            <ScrollRevealProvider optionsName={"right"}>
                                <p className="intro__line" key={index}>
                                    {line}
                                </p>
                            </ScrollRevealProvider>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
