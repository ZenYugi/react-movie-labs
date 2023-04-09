import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getCredits } from "../../api/tmdb-api";


export default function MovieCredits({ movie }) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getCredits(movie.id).then((credits) => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <TableContainer component={Paper}>
  <Table sx={{minWidth: 550}} aria-label="credits table">
  <TableHead>
      <TableRow>
        <TableCell >Author</TableCell>
        <TableCell align="center">Excerpt</TableCell>
        <TableCell align="right">More</TableCell>
      </TableRow>
  </TableHead>

  <TableBody>
    {credits.map((m) => (
    <TableRow key={m.id}>
      <TableCell component="th" scope="row">
        {m.name}
      </TableCell>

      <TableCell >{m.original_name}</TableCell>
      <TableCell >

      <Link
        to={`/credits/${m.id}`}
        state={{
            credit: m,
            movie: movie,
                  }}
                >
        Full Credits
      </Link>
      </TableCell>
      </TableRow>
          ))}
      </TableBody>
      </Table>
    </TableContainer>
  );
}