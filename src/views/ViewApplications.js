import React from 'react'
import ButtonFloating from '../components/ButtonFloating'
import { CarouselApplications } from '../components/applications-components/CarouselApplications'
import Header from '../components/home-components/Header'
import InventorApplications from '../components/applications-components/InventorApplications'

import '../styles/app.css'
import { Applications } from '../components/applications-components/Applications'


export const ViewApplications = () => {
    return (
        <div className="color-main">
            <Header />
            <CarouselApplications />
            <InventorApplications />
            <Applications />
            <ButtonFloating  />
        </div>
    )
}
