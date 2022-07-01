import React from "react";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container grid grid--footer footer__col-container">
                <div class="footer__logo">
                    <img
                        class="footer__logo-img"
                        src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/logos/onemoreclip-logo.png"
                        alt="onemoreclip-logo"
                    />
                    <p class="footer__text">
                        一群来自广西、湖北、浙江、云南、山东等全国各地的，热爱文化艺术与影视传媒的大学生。
                    </p>
                </div>
                <div class="footer__contact">
                    <p class="footer__title">联系我们</p>
                    <p class="footer__text">
                        湖北省武汉市洪山区南湖大道182号 中南财经政法大学南湖校区
                    </p>
                    <p class="footer__contact-links">
                        <a href="mailto:business@onemoreclip.com">
                            business@onemoreclip.com
                        </a>
                        <a href="https://wenjuan.feishu.cn/m?t=sNXSaz3XjZxi-r5hg">
                            加入我们
                        </a>
                    </p>
                </div>
                <div class="footer__nav">
                    <p class="footer__title">常用链接</p>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <a href="#" class="footer__link">
                                首页
                            </a>
                        </li>
                        <li class="footer__item">
                            <a href="#" class="footer__link">
                                关于我们
                            </a>
                        </li>
                        <li class="footer__item">
                            <a href="#" class="footer__link">
                                鲸岛音乐节
                            </a>
                        </li>
                        <li class="footer__item">
                            <a href="#" class="footer__link">
                                哔哩哔哩
                            </a>
                        </li>
                        <li class="footer__item">
                            <a href="#" class="footer__link">
                                ZUEL创业学院
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer__qr-code">
                    <img
                        src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/qr-code/wechat.png"
                        alt="wechat qr-code"
                        class="footer__qr-code-img"
                    />
                    <p class="footer__text">微信公众号</p>
                </div>
                <div class="footer__qr-code">
                    <img
                        src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/qr-code/qq.png"
                        alt="wechat qr-code"
                        class="footer__qr-code-img"
                    />
                    <p class="footer__text">官方QQ</p>
                </div>
            </div>
            <div class="container footer__info">
                <div class="footer__copyright">
                    © 2021 All Rights Reserved
                    <a href="#">武汉再来一条文化传播有限公司</a> 版权所有
                </div>
                <div class="footer__qualifications">
                    <ul class="footer__info-list">
                        <li class="footer__info-item">
                            <a href="#" class="footer__info-link">
                                {" "}
                                经营资质{" "}
                            </a>
                        </li>
                        <li class="footer__info-item">
                            <a href="#" class="footer__info-link">
                                {" "}
                                隐私政策{" "}
                            </a>
                        </li>
                        <li class="footer__info-item">
                            <a href="#" class="footer__info-link">
                                鄂ICP备2021010994号
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
