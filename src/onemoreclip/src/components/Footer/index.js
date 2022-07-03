import React from "react";
import { ScrollRevealProvider } from "../../utils/providers";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container grid grid--footer footer__col-container">
                <ScrollRevealProvider
                    optionsName={"left"}
                    className="footer__logo"
                >
                    <img
                        className="footer__logo-img"
                        src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/logos/onemoreclip-logo.png"
                        alt="onemoreclip-logo"
                        key="img"
                    />
                    <p className="footer__text" key="text">
                        一群来自广西、湖北、浙江、云南、山东等全国各地的，热爱文化艺术与影视传媒的大学生。
                    </p>
                </ScrollRevealProvider>
                <ScrollRevealProvider
                    optionsName={"up"}
                    className="footer__contact"
                >
                    <p className="footer__title" key="title">
                        联系我们
                    </p>
                    <p className="footer__text" key="text">
                        湖北省武汉市洪山区南湖大道182号 中南财经政法大学南湖校区
                    </p>
                    <p className="footer__contact-links" key="links">
                        <a href="mailto:business@onemoreclip.com">
                            business@onemoreclip.com
                        </a>
                        <a href="https://wenjuan.feishu.cn/m?t=sNXSaz3XjZxi-r5hg">
                            加入我们
                        </a>
                    </p>
                </ScrollRevealProvider>
                <ScrollRevealProvider
                    optionsName={"up"}
                    className="footer__nav"
                >
                    <p className="footer__title" key="title">
                        常用链接
                    </p>
                    <ul className="footer__list" key="list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                首页
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                关于我们
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                鲸岛音乐节
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                哔哩哔哩
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                ZUEL创业学院
                            </a>
                        </li>
                    </ul>
                </ScrollRevealProvider>
                <ScrollRevealProvider
                    optionsName={"right"}
                    className="footer__qr-code"
                >
                    <img
                        src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/qr-code/wechat.png"
                        alt="wechat qr-code"
                        className="footer__qr-code-img"
                        key="img"
                    />
                    <p className="footer__text" key="text">
                        微信公众号
                    </p>
                </ScrollRevealProvider>
                <ScrollRevealProvider
                    optionsName={"right"}
                    className="footer__qr-code"
                >
                    <img
                        src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/qr-code/qq.png"
                        alt="wechat qr-code"
                        className="footer__qr-code-img"
                        key="img"
                    />
                    <p className="footer__text" key="text">
                        官方QQ
                    </p>
                </ScrollRevealProvider>
            </div>
            <ScrollRevealProvider
                optionsName={"up"}
                className="container footer__info"
            >
                <div className="footer__copyright" key="copyright">
                    © 2021 All Rights Reserved
                    <a href="#">武汉再来一条文化传播有限公司</a> 版权所有
                </div>
                <div className="footer__qualifications" key="qualifications">
                    <ul className="footer__info-list">
                        <li className="footer__info-item">
                            <a href="#" className="footer__info-link">
                                {" "}
                                经营资质{" "}
                            </a>
                        </li>
                        <li className="footer__info-item">
                            <a href="#" className="footer__info-link">
                                {" "}
                                隐私政策{" "}
                            </a>
                        </li>
                        <li className="footer__info-item">
                            <a href="#" className="footer__info-link">
                                鄂ICP备2021010994号
                            </a>
                        </li>
                    </ul>
                </div>
            </ScrollRevealProvider>
        </footer>
    );
};

export default Footer;
