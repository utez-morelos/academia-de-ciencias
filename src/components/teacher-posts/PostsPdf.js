import React, { useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'

export const PdfOne = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [btnDisableBefore, setBtnDisableBefore] = useState(true)
    const [btnDisableAfter, setBtnDisableAfter] = useState(false)
    const [open, setOpen] = useState(false)


    useEffect(() => {

        if (pageNumber === 1) {
            setBtnDisableBefore(true)
        }

        if (pageNumber <= 3) {
            setBtnDisableAfter(false)
        }

    }, [pageNumber])


    const handelChangeAfter = () => {

        setPageNumber(pageNumber + 1)
        setBtnDisableBefore(false)

        if (pageNumber === 3) {

            setBtnDisableAfter(true)
        }
    }

    const handelChangeBefore = () => {

        setPageNumber(pageNumber - 1)

    }


    const showPdfOne = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div>
            <div className="img-container">
                <img src="https://micarrerauniversitaria.com/wp-content/uploads/2018/02/ingenieria-de-telecomunicaciones-8.jpg" alt="" className="image-post" />
                <div className="container-post">
                    <div className="text-post">
                        Physical Concepts about Telecommunications Theory Focusing on
                        Knowledge Application.
                    </div>
                    <div className="btn-posts">
                        <button className="article" onClick={showPdfOne}>Ver artículo</button>
                        <a href="https://drive.google.com/uc?id=1wfGAbHP8RcNtB5I64ZxGr7jAR9mO_-cD&export=download">
                            <button className="article" >Descargar artículo</button>
                        </a>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                fullScreen={true}
            >
                <div className="div-image">

                    {(pageNumber === 1) ? <img src="https://i.ibb.co/wWjKL3L/Paper-Telecommunication-page-1.jpg" className="img-post-pdf" alt="Paper-01" />

                        : (pageNumber === 2) ? <img src="https://i.ibb.co/CWY1f3S/Paper-Telecommunication-page-2.jpg" className="img-post-pdf" alt="Paper-02" />

                            : (pageNumber === 3) ? <img src="https://i.ibb.co/q12CL3g/Paper-Telecommunication-page-3.jpg" className="img-post-pdf" alt="Paper-03" />

                                : (pageNumber === 4) ? <img src="https://i.ibb.co/9YJdPTg/Paper-Telecommunication-page-4.jpg" className="img-post-pdf" alt="Paper-04" />
                                    : ''
                    }

                </div>
                <p className="pages-pdf">Página {pageNumber} de 4</p>
                <div className="btn-posts-option">
                    <button className={(btnDisableBefore) ? 'btn-blocked' : 'btn-options'} onClick={handelChangeBefore} disabled={btnDisableBefore}>Anterior</button>
                    <button className={(btnDisableAfter) ? 'btn-blocked' : 'btn-options'} onClick={handelChangeAfter} disabled={btnDisableAfter}>Siguiente</button>
                    <button className="btn-options" onClick={handleClose} >Cerrar</button>
                </div>

            </Dialog>
        </div>
    )
}

export const PdfTwo = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [btnDisableBefore, setBtnDisableBefore] = useState(true)
    const [btnDisableAfter, setBtnDisableAfter] = useState(false)
    const [open, setOpen] = useState(false)


    useEffect(() => {

        if (pageNumber === 1) {
            setBtnDisableBefore(true)
        }

        if (pageNumber <= 4) {
            setBtnDisableAfter(false)
        }

    }, [pageNumber])


    const handelChangeAfter = () => {

        setPageNumber(pageNumber + 1)
        setBtnDisableBefore(false)
        if (pageNumber === 4) {

            setBtnDisableAfter(true)
        }
    }

    const handelChangeBefore = () => {

        setPageNumber(pageNumber - 1)

    }


    const showPdfOne = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div>
            <div className="img-container">
                <img src="https://4.bp.blogspot.com/-UAmpKA7Wd1w/W4mPiQYbPxI/AAAAAAAAJOU/YwOT0V_amm0yxv6jj0MG51C7-CsNYuehgCLcBGAs/s640/PoE.jpg" alt="" className="image-post" />
                <div className="container-post">
                    <div className="text-post">
                        USO EFICIENTE DE ENERGÍA ELÉCTRICA EN REDES DIGITALES MODERNAS CON TECNOLOGÍA POWER OVER ETHERNET, EN UNO DE LOS EDIFICIOS DEL CAMPUS UNIVERSITARIO.
                    </div>
                    <div className="btn-posts">
                        <button className="article" onClick={showPdfOne}>Ver artículo</button>
                        <a href="https://drive.google.com/uc?id=14VESJMUtUoHuOv44mQhT_IL_0Ce-RJE8&export=download">
                            <button className="article" >Descargar artículo</button>
                        </a>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                fullScreen={true}
            >
                <div className="div-image">

                    {(pageNumber === 1) ? <img src="https://i.ibb.co/W6K0xYZ/OHSA-AJ-Chiapas-page-0001.jpg" className="img-post-pdf" alt="Uso-01" />

                        : (pageNumber === 2) ? <img src="https://i.ibb.co/y4XyBWP/OHSA-AJ-Chiapas-page-0002.jpg" className="img-post-pdf" alt="Uso-02" />

                            : (pageNumber === 3) ? <img src="https://i.ibb.co/GJ2sP2Z/OHSA-AJ-Chiapas-page-0003.jpg" className="img-post-pdf" alt="Uso-03" />

                                : (pageNumber === 4) ? <img src="https://i.ibb.co/DG9tsFb/OHSA-AJ-Chiapas-page-0004.jpg" className="img-post-pdf" alt="Uso-04" />

                                    : (pageNumber === 5) ? <img src="https://i.ibb.co/7vwyd1v/OHSA-AJ-Chiapas-page-0005.jpg" className="img-post-pdf" alt="Uso-05" />
                                        : ''
                    }
                </div>
                <p className="pages-pdf">Página {pageNumber} de 5</p>
                <div className="btn-posts-option">
                    <button className={(btnDisableBefore) ? 'btn-blocked' : 'btn-options'} onClick={handelChangeBefore} disabled={btnDisableBefore}>Anterior</button>
                    <button className={(btnDisableAfter) ? 'btn-blocked' : 'btn-options'} onClick={handelChangeAfter} disabled={btnDisableAfter}>Siguiente</button>
                    <button className="btn-options" onClick={handleClose} >Cerrar</button>
                </div>

            </Dialog>
        </div>
    )
}



export const PdfThree = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [btnDisableBefore, setBtnDisableBefore] = useState(true)
    const [btnDisableAfter, setBtnDisableAfter] = useState(false)
    const [open, setOpen] = useState(false)


    useEffect(() => {

        if (pageNumber === 1) {
            setBtnDisableBefore(true)
        }
        if (pageNumber <= 4) {
            setBtnDisableAfter(false)
        }

    }, [pageNumber])



    const handelChangeAfter = () => {

        setPageNumber(pageNumber + 1)
        setBtnDisableBefore(false)

        if (pageNumber === 4) {

            setBtnDisableAfter(true)
        }
    }

    const handelChangeBefore = () => {

        setPageNumber(pageNumber - 1)

    }


    const showPdfOne = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div>
            <div className="img-container">
                <img src="https://mundostartups.com/wp-content/uploads/2020/08/1184meg_e11d22113f60ffb-1140x570.jpg" alt="" className="image-post" />
                <div className="container-post">
                    <div className="text-post">
                        Los Clústeres de TI en México, para Crear Ventajas Competitivas
                        Únicas en la Nación.
                    </div>
                    <div className="btn-posts">
                        <button className="article" onClick={showPdfOne}>Ver artículo</button>
                        <a href="https://drive.google.com/uc?id=1vg29hZDpSmrbbDNO7KB9GW7SnLbxqJ1m&export=download">
                            <button className="article" >Descargar artículo</button>
                        </a>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                fullScreen={true}
            >
                <div className="div-image">

                    {(pageNumber === 1) ? <img src="https://i.ibb.co/QkrRDqG/AJ-Chiapas-Beatriz-page-0001.jpg" className="img-post-pdf" alt="Cluster-01" />

                        : (pageNumber === 2) ? <img src="https://i.ibb.co/BLWPbsZ/AJ-Chiapas-Beatriz-page-0002.jpg" className="img-post-pdf" alt="Cluster-02" />

                            : (pageNumber === 3) ? <img src="https://i.ibb.co/xswR5vP/AJ-Chiapas-Beatriz-page-0003.jpg" className="img-post-pdf" alt="Cluster-03" />

                                : (pageNumber === 4) ? <img src="https://i.ibb.co/hyMG3Nc/AJ-Chiapas-Beatriz-page-0004.jpg" className="img-post-pdf" alt="Cluster-04" />

                                    : (pageNumber === 5) ? <img src="https://i.ibb.co/f0VNNm6/AJ-Chiapas-Beatriz-page-0005.jpg" className="img-post-pdf" alt="Cluster-05" />
                                        : ''
                    }
                </div>

                <p className="pages-pdf">Página {pageNumber} de 5</p>
                <div className="btn-posts-option">
                    <button className={(btnDisableBefore) ? 'btn-blocked' : 'btn-options'} onClick={handelChangeBefore} disabled={btnDisableBefore}>Anterior</button>
                    <button className={(btnDisableAfter) ? 'btn-blocked' : 'btn-options'} onClick={handelChangeAfter} disabled={btnDisableAfter}>Siguiente</button>
                    <button className="btn-options" onClick={handleClose} >Cerrar</button>
                </div>

            </Dialog>
        </div>
    )
}


export const PdfFour = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [btnDisableBefore, setBtnDisableBefore] = useState(true)
    const [btnDisableAfter, setBtnDisableAfter] = useState(false)
    const [open, setOpen] = useState(false)


    useEffect(() => {

        if (pageNumber === 1) {
            setBtnDisableBefore(true)
        }

        if (pageNumber <= 5) {
            setBtnDisableAfter(false)
        }

    }, [pageNumber])


    const handelChangeAfter = () => {

        setPageNumber(pageNumber + 1)
        setBtnDisableBefore(false)

        if (pageNumber === 5) {

            setBtnDisableAfter(true)
        }
    }

    const handelChangeBefore = () => {

        setPageNumber(pageNumber - 1)
        setBtnDisableAfter(false)

    }


    const showPdfOne = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div>
            <div className="img-container">
                <img src="https://mk0lanoticiapwmx1x6a.kinstacdn.com/wp-content/uploads/2021/04/estudiantes-de-6-8-y-9-12-de-charlotte-regresan-al-aula-cuatro-dias-a-la-semana.jpeg" alt="" className="image-post" />
                <div className="container-post">
                    <div className="text-post">
                        Análisis de la Situación Integral de los Estudiantes en Condiciones de
                        Pandemia: Caso DACEA – UTEZ.
                    </div>
                    <div className="btn-posts">
                        <button className="article" onClick={showPdfOne}>Ver artículo</button>
                        <a href="https://drive.google.com/uc?id=1TcCX49MLMu9-x_f0Q-XH8DbsfyP7y-4P&export=download">
                            <button className="article" >Descargar artículo</button>
                        </a>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                fullScreen={true}
            >
                <div className="div-image">

                    {(pageNumber === 1) ? <img src="https://i.ibb.co/zZhGppY/AJ-Chiapas-Puig-page-0001.jpg" className="img-post-pdf" alt="Pandemia-01" />

                        : (pageNumber === 2) ? <img src="https://i.ibb.co/jT8kpNy/AJ-Chiapas-Puig-page-0002.jpg" className="img-post-pdf" alt="Pandemia-02" />

                            : (pageNumber === 3) ? <img src="https://i.ibb.co/HDxTYhg/AJ-Chiapas-Puig-page-0003.jpg" className="img-post-pdf" alt="Pandemia-03" />

                                : (pageNumber === 4) ? <img src="https://i.ibb.co/jhM3nJp/AJ-Chiapas-Puig-page-0004.jpg" className="img-post-pdf" alt="Pandemia-04" />

                                    : (pageNumber === 5) ? <img src="https://i.ibb.co/MMn6Pk3/AJ-Chiapas-Puig-page-0005.jpg" className="img-post-pdf" alt="Pandemia-05" />

                                        : (pageNumber === 6) ? <img src="https://i.ibb.co/zVpvcxt/AJ-Chiapas-Puig-page-0006.jpg" className="img-post-pdf" alt="Pandemia-06" />
                                            : ''
                    }
                </div>

                <p className="pages-pdf">Página {pageNumber} de 6</p>
                <div className="btn-posts-option">
                    <button className={(btnDisableBefore) ? 'btn-blocked' : 'btn-options'} onClick={handelChangeBefore} disabled={btnDisableBefore}>Anterior</button>
                    <button className={(btnDisableAfter) ? 'btn-blocked' : 'btn-options'} onClick={handelChangeAfter} disabled={btnDisableAfter}>Siguiente</button>
                    <button className="btn-options" onClick={handleClose} >Cerrar</button>
                </div>

            </Dialog>
        </div>
    )
}