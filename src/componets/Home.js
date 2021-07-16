import { Card } from './Card';
import React from 'react';
import '../styles/style.css';
import { Banner } from './Banner';

export const Home = ()=>{
    return(
        <div className="home">
            <Banner/>
            <div className="home__section">
                <Card 
                    src="https://s03.s3c.es/imag/_v0/770x420/b/7/6/Airbnb-Online-Experiences.jpg"
                    title="Una nueva experiencia"
                    description="Confortable lugar privado"
                    />
                <Card
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg?crop=1.00xw:0.753xh;0,0.227xh&resize=480:*"
                    title="Una nueva experiencia"
                    description="Confortable lugar privado"
                />
                <Card
                    src="https://i0.wp.com/files.tripstodiscover.com/files/2020/09/Historic-Trolley.jpg?resize=784%2C588"
                    title="Experiencia unica"
                    description="Confortable lugar privado"
                />
            </div>
            <div className="home__section">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}