import React from "react";
import {
    IoBulbOutline,
    IoCogOutline,
    IoSchoolOutline,
    IoThumbsUpOutline,
} from "react-icons/io5";
import LazyLoadImage from "../LazyLoadImage";

const Features = () => {
    return (
        <section className="section-features">
            <div className="container features__container">
                <div className="features__content">
                    <span className="heading-secondary--sub lazy">
                        {" "}
                        ABOUT US
                    </span>
                    <h2 className="heading-secondary">
                        <span>团队</span>简介
                    </h2>
                    <p className="features__about">
                        再来一条由来自全国各地的，热爱文化艺术与影视传媒的大学生组成。
                        我们努力“让热爱发光”，用独具特色的视角观察世界，于细微处发现生活之美，创作打动人心的作品。
                        再来一条团队于2020年暑假成立，再来一条文化2021年6月9日在中南财经政法大学成立。
                    </p>

                    <div className="features">
                        <div className="feature__container">
                            <div className="feature">
                                <IoBulbOutline className="feature__icon" />
                                <p className="feature__title">创新解决方案</p>
                                <p className="feature__text">
                                    再来一条团队可为您的活动提供创新性解决方案。
                                </p>
                            </div>
                        </div>

                        <div className="feature__container">
                            <div className="feature">
                                <IoCogOutline className="feature__icon" />
                                <p className="feature__title">为您量身定制</p>
                                <p className="feature__text">
                                    再来一条团队可针对您的需求为您定制个性化的产品和服务。
                                </p>
                            </div>
                        </div>
                        <div className="feature__container">
                            <div className="feature">
                                <IoSchoolOutline className="feature__icon" />
                                <p className="feature__title">青年创业团队</p>
                                <p className="feature__text">
                                    再来一条团队成员均为中南财经政法大学在校大学生。
                                </p>
                            </div>
                        </div>
                        <div className="feature__container">
                            <div className="feature">
                                <IoThumbsUpOutline className="feature__icon" />
                                <p className="feature__title">作品物美价廉</p>
                                <p className="feature__text">
                                    再来一条团队可为您提供质量上乘、价格亲民的影像作品。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature__img-container">
                    <LazyLoadImage
                        src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/home/cat-lazy.jpg"
                        data-src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/home/cat.jpg"
                        className="feature__img"
                        alt="a cute cat"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
