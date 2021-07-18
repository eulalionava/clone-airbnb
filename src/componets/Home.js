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
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg?crop=1.00xw:0.753xh;0,0.227xh&resize=480:*"
                    title="Una nueva experiencia"
                    description="Confortable lugar privado"
                />
                <Card 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGv8aVDSrxpplzXeC9UJCJKupNzamSds7pA&usqp=CAU"
                    title="Una nueva experiencia"
                    description="Confortable lugar privado"
                    />
                <Card
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg?crop=1.00xw:0.753xh;0,0.227xh&resize=480:*"
                    title="Experiencia unica"
                    description="Confortable lugar privado"
                />
            </div>
            <div className="home__section">
                <Card
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg?crop=1.00xw:0.753xh;0,0.227xh&resize=480:*"
                        title="Una nueva experiencia"
                        description="Confortable lugar privado"
                        price="$300/noche"
                />
                <Card 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGv8aVDSrxpplzXeC9UJCJKupNzamSds7pA&usqp=CAU"
                    title="Una nueva experiencia"
                    description="Confortable lugar privado"
                    price="$250/noche"
                />
                <Card
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg?crop=1.00xw:0.753xh;0,0.227xh&resize=480:*"
                    title="Experiencia unica"
                    description="Confortable lugar privado"
                    price="$500/noche"
                />
            </div>
        </div>
    )
}