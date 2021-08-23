import React from 'react'
import ButtonFloating from '../components/ButtonFloating'
import { CarouselConsultancies } from '../components/consultancies-components/CarouselConsultancies'
import '../styles/app.css'

export const ViewConsultancies = () => {
    return (
        <div className="header">
            <CarouselConsultancies /> 
            <ButtonFloating />
            
        </div>
    )
}
