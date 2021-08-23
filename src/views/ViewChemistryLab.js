import React from 'react'
import ButtonFloating from '../components/ButtonFloating'
import { CarouselChemistryLab } from '../components/chemistry-lab-components/CarouselChemistryLab'
import { InventorApplications } from '../components/chemistry-lab-components/InstalationLab'
import { MaterialChemistry } from '../components/chemistry-lab-components/MaterialChemistry'
import Header from '../components/home-components/Header'
import '../styles/app.css'

export const ViewChemistryLab = () => {
    return (
        <div className="header">
            <Header />
            <CarouselChemistryLab />
            <InventorApplications />
            <MaterialChemistry />
            <ButtonFloating />
        </div>
    )
}
