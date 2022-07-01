import React from "react";

const ContactUs = () => {
    return (
        <section class="section-contact-us">
            <div class="container text-center">
                <span class="heading-secondary--sub"> REACH OUT FOR US</span>
                <h2 class="heading-secondary">
                    立即与我们<span>联系</span>
                </h2>
                <ul class="contact-us__list">
                    <li class="contact-us__item">
                        <span class="contact-us__icon">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <p class="contact-us__text">
                            <a
                                class="contact-us__link"
                                href="mailto:business@onemoreclip.com"
                            >
                                business@onemoreclip.com
                            </a>
                        </p>
                    </li>
                    <li class="contact-us__item">
                        <span class="contact-us__icon">
                            <i class="fa fa-qq"></i>
                        </span>
                        <p class="contact-us__text">
                            <span> 2225055729 </span>
                            <span> 657350435 </span>
                        </p>
                    </li>
                    <li class="contact-us__item">
                        <span class="contact-us__icon">
                            <i class="fa fa-weixin"></i>
                        </span>
                        <p class="contact-us__text">OMC-CircleYuan</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ContactUs;
