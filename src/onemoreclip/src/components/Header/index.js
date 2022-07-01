import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    navigationToggle,
    navigationBackgroundToDark,
    navigationBackgroundToLight,
} from "../../slices/NavigationSlice";
const Header = () => {
    const selector = (state) => {
        return {
            navigationActive: state.Navigation.active,
            navigationBackgroundDark: state.Navigation.backgraoundDark,
        };
    };
    const dispatch = useDispatch();

    useEffect(() => {
        //navigation
        const navigationModeToggle = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) dispatch(navigationBackgroundToLight());
            else dispatch(navigationBackgroundToDark());
        };

        const header = document.querySelector(".header");
        const headerObserver = new IntersectionObserver(navigationModeToggle, {
            root: null,
            threshold: 1,
        });
        headerObserver.observe(header);
    }, []);

    const { navigationActive, navigationBackgroundDark } =
        useSelector(selector);

    return (
        <header className="header">
            <nav
                className={`navigation ${navigationActive ? "active" : ""} ${
                    navigationBackgroundDark ? "navigation--dark" : ""
                }`}
            >
                <div className="container navigation__container">
                    <div className="navigation__logo-box">
                        <a href="#" className="navigation__logo-link">
                            <img
                                src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/logos/onemoreclip-logo.png"
                                alt="onemoreclip logo"
                                className="navigation__logo"
                            />
                        </a>
                    </div>
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                首页
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                关于我们
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                鲸岛音乐节
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">
                                联系我们
                            </a>
                        </li>
                    </ul>
                    <div
                        className="navigation__button"
                        onClick={() => dispatch(navigationToggle())}
                    >
                        <span className="navigation__button-icon">&nbsp;</span>
                    </div>
                </div>
            </nav>
            <div className="header__text-box">
                <h1 className="heading-primary">让热爱发光</h1>
            </div>
            <div className="header__bg-img-box">
                <img
                    src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/hero/hero-01.jpg"
                    data-src="https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/hero/hero-01.jpg"
                    alt="a girl holding camera"
                    className="header__bg-img"
                />
            </div>
            {/* <!-- <div class="bg-video">
                <video class="bg-video__content" autoplay muted loop>
                    <source
                        src="video/index.mp4"
                        data-src="video/index.mp4"
                        type="video/mp4"
                    />
                </video>
            </div> --> */}
        </header>
    );
};

export default Header;
