import React from "react";

const Introduction = ({ data }) => {
    const { title, lines, backgroundImageSrc } = data;
    return (
        <section class="section-intro">
            <div class="container intro__container">
                <div class="intro__bg-img-box">
                    <img
                        src={backgroundImageSrc}
                        data-src={backgroundImageSrc}
                        alt="a beautiful girl"
                        class="intro__bg-img"
                    />
                </div>
                <div class="intro">
                    <div class="intro__text">
                        <p class="intro__title">{title}</p>
                        {lines.map((line, index) => (
                            <p class="intro__line" key={index}>
                                {line}
                            </p>
                        ))}
                        {/* <p class="intro__line">
                            团队核心成员有丰富的视频制作经验
                        </p>
                        <p class="intro__line">曾获跨校比赛奖项</p>
                        <p class="intro__line">可为您提供质量上乘的视频作品</p>
                        <p class="intro__line">
                            我们曾与南宁市第二中学、广西育杰教育集团达成合作
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
