import React from 'react'
import Header from '../components/home-components/Header'
import ButtonFloating from '../components/ButtonFloating'
import { CarouselProjects } from '../components/projects-components/CarouselProjects'
import { Projects } from '../components/projects-components/Projects'
import '../styles/app.css'

export const ViewProjects = () => {
    return (
        <div className="header">
            <Header />
            <CarouselProjects />
            <Projects />
            <ButtonFloating />
            
        </div>
    )
}
