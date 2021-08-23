import React from 'react'
import { PdfFour, PdfOne, PdfThree, PdfTwo } from './PostsPdf'
import '../../styles/teacherPosts.css'

export const TeacherPosts = () => {
    return (
        <div>
            <div className="container container-posts animate__animated animate__fadeInRight">
                <PdfOne />
                <PdfTwo />
            </div>

            <div className="container container-posts animate__animated animate__fadeInLeft">
                <PdfThree />
                <PdfFour />
            </div>
            <div className="img-container-movil animate__animated animate__fadeInRight">
                <img src="https://aliatuniversidades.com.mx/blog/wp-content/uploads/2019/12/original-01f01813d49945800c480c9bd3d35c57.jpg" alt="" className="image-post-movil" />
                <div className="container-post-movil">
                    <div className="text-post-movil">
                        Physical Concepts about Telecommunications Theory Focusing on
                        Knowledge Application.
                    </div>
                </div>
            </div>
        </div>
    )
}
