import React from "react";
import filterInformation from "./filterInformation"
import { useForm } from "../../hooks/useForm";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core/styles";

import "../../styles/materialChimestry.css"

const useStyles = makeStyles((theme) => ({
    letter: {
        fontFamily: "Roboto Black",
    },
    letterRegular: {
        fontFamily: "Roboto Regular",
    },
    notResult: {
        textAlign: 'center',
    }
}));

export const MaterialChemistry = () => {
    const classes = useStyles();

    const [formValues, handleInputChange] = useForm({
        searchText: ""

    })

    const { searchText } = formValues

    const array = filterInformation(searchText)


    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchText)
    }

    return (
        <div className="container animate__animated animate__fadeInRight">
            <div className="title-size">
                <hr />
                <h3 className={classes.letter}>Material</h3>
                <hr />
            </div>
            <form onSubmit={handleSearch} className="search">
                <Grid container spacing={1} alignItems="flex-end" className="search">
                    <Grid item>
                        <SearchIcon />
                    </Grid>
                    <Grid item>
                        <TextField autoComplete="off" label="Buscar" onChange={handleInputChange} name="searchText" />
                    </Grid>
                </Grid>
            </form>

            <div className="content-material-chimestry">
                {
                    array.length > 0 ?
                        array.map(item => (
                            <div key={item.nombre}>
                                {item.componente}
                            </div>
                        )) :
                        <h1 className="">sin resultados</h1>
                }
            </div>
        </div>
    )
};
