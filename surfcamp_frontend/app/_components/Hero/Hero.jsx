import React from 'react';
import Link from 'next/link';

const Hero = ({imgSrc, headline, theme = 'turquoise'}) => {
    return (
        <section className='hero'>
            <div className="hero__background">
                <img src={imgSrc || "/assets/hero-home.jpg"} alt="Surfer on the waves" />
            </div>
            <div className={`hero__headline hero__headline--${theme}`}>
                {headline}
            </div>
            <button className={`btn btn--medium btn--${theme}`}>
                <Link href="/events">
                    BOOK NOW
                </Link>
            </button>
            <img
                src="/assets/logo.svg"
                alt="logo"
                className={`hero__logo hero__logo--${theme}`}
            />
        </section>
    );
};

export default Hero;