import React from "react"
import { useParams, Link } from "react-router-dom";
import ApartmentsData from "./../../data/ProjectData";
import "./aboutApartament.css"


export const AboutApartament = () => {

    const { id } = useParams();
    const apartment = ApartmentsData.find((apt) => apt.id === Number(id));

    const url = `https://maps.google.com/maps?q=${encodeURIComponent(apartment.street + ', ' + apartment.city)}&z=15&output=embed`;


    console.log(apartment.city)
    return (
        <>
            <section className="section">
                <div className="contact-card">
                    <h2 className="contact-title">დაგვიკავშირდით</h2>
                    <div className="contact-info">მისამართი: {apartment.city},  ქუჩა {apartment.street}</div>
                    <div className="contact-info">ტელეფონი: {apartment.num}</div>
                    <iframe
                        className="contact-map"
                        src={url}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                    <a href={`tel:${apartment.num}`} className="contact-link">დაგვირეკეთ</a>
                </div>
            </section>
        </>
    )
}