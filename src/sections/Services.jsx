import React from "react";
import obras_civiles from '../assets/obras_civiles.jpg';

export default function Services(){
    return (
        <section id="services">
            <article>
                <img src={obras_civiles} alt="" />
                <h2>Construcciones Civiles</h2>
            </article>
            <article>
                <img src={obras_civiles} alt="" />
                <h2>Instalaciones Electricas</h2>
            </article>
            <article>
                <img src={obras_civiles} alt="" />
                <h2>Asesorias</h2>
            </article>
        </section>
    );
}