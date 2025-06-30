import React from "react"

import "./home.css"

import image1 from "./../../assets/anagi1.jpg";
import image2 from "./../../assets/anagi2.jpg";
import image3 from "./../../assets/anagi3.jpg";
import image4 from "./../../assets/anagi4.jpg";

import surati1 from "./../../assets/surati1.png";
import surati2 from "./../../assets/surati2.png";
import surati3 from "./../../assets/surati3.png";
import surati4 from "./../../assets/surati4.png";
import surati5 from "./../../assets/surati5.png";
import surati6 from "./../../assets/surati6.png";

import slider1 from "./../../assets/slider1.jpg";
import slider2 from "./../../assets/slider2.jpg";
import slider3 from "./../../assets/slider3.jpg";
import slider4 from "./../../assets/slider4.jpg";

export const Home = () => {


    const extraCards = [
        { image: surati1, text: `"ანაგი"...` },
        { image: surati2, text: `ილია წულაია: "წლების..."` },
        { image: surati3, text: `ფლორიდა, თავისი ტურისტული...` },
        { image: surati4, text: `გიგა აკირთავა: "მიგრაციის..."` },
        { image: surati5, text: `"Archi Miami" იქნება...` },
        { image: surati6, text: `პროექტი დასრულდება 2026 წელს...` }
    ];

    const sliderImages = [slider1, slider2, slider3, slider4];

    return (
        <>
            <section className="home-section">
                {/* Slider */}
                <div className="slider">
                    <div className="slider-track">
                        {sliderImages.map((img, i) => (
                            <img key={i} src={img} alt={`slide-${i}`} className="slider-image" />
                        ))}
                    </div>
                </div>

                {/* About section */}
                <div className="about-section">
                    <h2 className="about-title">ჩვენს შესახებ</h2>
                    <p className="about-text">
                        ანაგი არის ერთ-ერთი წამყვანი სამშენებლო კომპანია საქართველოში...
                    </p>
                    <div className="about-gallery">
                        {[image1, image2, image3, image4].map((src, i) => (
                            <img key={i} src={src} alt={`thumb-${i}`} className="gallery-image" />
                        ))}
                    </div>
                </div>

                {/* Extra Cards */}
                <div className="card-section">
                    {extraCards.map((card, index) => (
                        <div key={index} className="info-card">
                            <img src={card.image} alt={`card-${index}`} className="info-image" />
                            <p className="info-text">{card.text}</p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="stats-section">
                    <div className="stat">
                        <h3 className="stat-number">150+</h3>
                        <p className="stat-label">დასრულებული პროექტი</p>
                    </div>
                    <div className="stat">
                        <h3 className="stat-number">1200+</h3>
                        <p className="stat-label">თანამშრომელი</p>
                    </div>
                    <div className="stat">
                        <h3 className="stat-number">30+</h3>
                        <p className="stat-label">წლის გამოცდილება</p>
                    </div>
                </div>
            </section>
        </>
    )
}