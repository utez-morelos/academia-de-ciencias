import React from "react";
import { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import {
  DataInformation,
  MariluChavez,
  KarenBarreraComponent,
  LuisRamirez,
  NadiaOliveros,
  RamonRuiz,
  Edvaart,
  OscarSalinas
} from "../teaching-information-components/DataInformation";
import { makeStyles } from "@material-ui/core";

import "../../styles/table.css";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto Black",
  },
  names: {
    fontFamily: "Roboto Light",
  },
  space: {
    marginRight: 5,
  },

}));

export const TableInformation = () => {

  const classes = useStyles();

  const [posts] = useState([
    { nombre: "Oscar Hilario Salinas Aviles", info: <OscarSalinas /> },
    { nombre: "María Magdalena Casas Saucedo", info: <DataInformation /> },
    {
      nombre: "Karen Elizane Barrera Salgado",
      info: <KarenBarreraComponent />,
    },
    { nombre: "Marilu Chavez Castillo", info: <MariluChavez /> },
    { nombre: "Luis Daniel Ramírez Mendoza", info: <LuisRamirez /> },
    { nombre: "Nadia Oyuki Oliveros Salgado", info: <NadiaOliveros /> },
    { nombre: "Ramón Cabello Ruiz", info: <RamonRuiz /> },
    { nombre: "Edvaart Sethaziz Jatirian Foltides", info: <Edvaart /> },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container">
        <div className="divmargen"></div>
        <div className="contenido-tabla animate__animated animate__fadeInLeft">
          <div className="tabla">
            <Posts posts={currentPosts} />
            <Pagination
              postsPerPage={postPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
          <div className={classes.image}>
          <img src="https://i.ibb.co/LvYjC8f/coallge.png" className="docente-img" alt="docentes" />
          </div>
        </div>
      </div>

      <div>
        <div className="content-table-movil animate__animated animate__fadeInLeft">
          <div className="table-movil">
            <Posts posts={currentPosts} />
            <Pagination
              postsPerPage={postPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Posts = ({ posts }) => {
  const classes = useStyles();

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center" className={classes.root}>
            Nombre del docente
          </TableCell>
          <TableCell align="center" className={classes.root}>
            Información
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="letterName">
        {posts.map((post) => (
          <TableRow key={post.nombre}>
            <TableCell component="th" align="center" className={classes.names}>
              {post.nombre}
            </TableCell>
            <TableCell component="th" align="center" className={classes.names}>
              {post.info}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const classes = useStyles();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="paginar">
        {pageNumbers.map((number, index) => (
          <li key={index} className={classes.space}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
