import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Data01 } from "./DownloadData";
import Quimica from "../../../images/Archivoquimica.png";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../../styles/material.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  styleLetterBlack: {
    fontFamily: "Roboto Black",
  },
  styleLetterRegular: {
    fontFamily: "Roboto Regular",
  },
  space: {
    marginRight: 5,
    fontFamily: "Roboto Black",
  },
});

const DownloadMaterialChemistry = () => {
  const classes = useStyles();

  const [posts] = useState([
    { nombre: "archivo 1", descarga: <Data01 /> },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="animate__animated animate__fadeIn">
      <hr />
      <h3 className={classes.styleLetterBlack}>
        Descarga de material didáctico (Quimíca)
      </h3>
      <hr />
      <div className="container-download">
        <div className="content-download">
          <Posts posts={currentPosts} />
          <Pagination
            postsPerPage={postPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
        <div>
          <img src={Quimica} className="image-academic" alt="quimica" />
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
          <TableCell align="center" className={classes.styleLetterBlack}>
            Nombre del archivo
          </TableCell>
          <TableCell align="center" className={classes.styleLetterBlack}>
            Descarga
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.nombre}>
            <TableCell
              component="th"
              align="center"
              className={classes.styleLetterRegular}
            >
              {post.nombre}
            </TableCell>
            <TableCell component="th" align="center">
              {post.descarga}
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

export default DownloadMaterialChemistry;
