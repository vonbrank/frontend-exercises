import React from "react";

const ContactUs = () => {
    return (
        <section className="section-contact-us">
            <div className="container text-center">
                <span className="heading-secondary--sub"> REACH OUT FOR US</span>
                <h2 className="heading-secondary">
                    立即与我们<span>联系</span>
                </h2>
                <ul className="contact-us__list">
                    <li className="contact-us__item">
                        <span className="contact-us__icon">
                            <i className="fa fa-envelope"></i>
                        </span>
                        <p className="contact-us__text">
                            <a
                                className="contact-us__link"
                                href="mailto:business@onemoreclip.com"
                            >
                                business@onemoreclip.com
                            </a>
                        </p>
                    </li>
                    <li className="contact-us__item">
                        <span className="contact-us__icon">
                            <i className="fa fa-qq"></i>
                        </span>
                        <p className="contact-us__text">
                            <span> 2225055729 </span>
                            <span> 657350435 </span>
                        </p>
                    </li>
                    <li className="contact-us__item">
                        <span className="contact-us__icon">
                            <i className="fa fa-weixin"></i>
                        </span>
                        <p className="contact-us__text">OMC-CircleYuan</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ContactUs;
