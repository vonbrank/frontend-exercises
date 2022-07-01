import React from "react";

const Introduction = ({ data }) => {
    const { title, lines, backgroundImageSrc } = data;
    return (
        <section className="section-intro">
            <div className="container intro__container">
                <div className="intro__bg-img-box">
                    <img
                        src={backgroundImageSrc}
                        data-src={backgroundImageSrc}
                        alt="a beautiful girl"
                        className="intro__bg-img"
                    />
                </div>
                <div className="intro">
                    <div className="intro__text">
                        <p className="intro__title">{title}</p>
                        {lines.map((line, index) => (
                            <p className="intro__line" key={index}>
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
