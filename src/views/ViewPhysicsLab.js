import React from 'react'
import Header from '../components/home-components/Header'
import ButtonFloating from '../components/ButtonFloating'
import { CarouselPhysicsLab } from '../components/physics-lab-components/CarouselPhysicsLab'
import '../styles/app.css'

export const ViewPhysicsLab = () => {
    return (
        <div className="header">
            <Header />
            <CarouselPhysicsLab />
            <ButtonFloating />
            
        </div>
    )
}
