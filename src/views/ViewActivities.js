import React from 'react'
import ButtonFloating from '../components/ButtonFloating'
import Header from '../components/home-components/Header'
import '../styles/app.css'
import { Activities } from '../components/activities-components/Activities'

export const ViewActivities = () => {
    return (
        <div className="color-main">
            <Header />
            <Activities />
            <ButtonFloating  />
        </div>
    )
}
