import React from 'react'
import ButtonFloating from '../components/ButtonFloating'
import Header from '../components/home-components/Header'
import { TeacherPosts } from '../components/teacher-posts/TeacherPosts'

export const ViewTeacherPosts = () => {
    return (
        <div className="header">
            <Header />
            <TeacherPosts />
            <ButtonFloating />

        </div>
    )
}
