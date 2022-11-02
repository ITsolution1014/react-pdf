import React, { useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import jsonData from "../resources/data.json";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../components/MyDocument";

const Home = () => {
  const [date, setDate] = React.useState("");
  const [tableInfo, setTableInfo] = React.useState({});

  useEffect(() => {
    setTableInfo(jsonData);
  }, []);

  const handleChange = (event) => {
    if (event.target.value === 2) {
      setDate(event.target.value);
      const result = jsonData.data.filter((row) => row.nationality === "DOM");
      const data = [];
      data["data"] = result;
      setTableInfo(data);
    } else if (event.target.value === 1) {
      setDate(event.target.value);

      const result = jsonData.data.filter((row) => row.id > 10);
      const data = [];
      data["data"] = result;
      setTableInfo(data);
    } else if (event.target.value === 3) {
      setDate(event.target.value);
      const result = jsonData.data.filter(
        (row) => row.location === "Ansbach" || row.location === "Dohren"
      );
      const data = [];
      data["data"] = result;
      setTableInfo(data);
    }
  };

  return (
    <div style={{width:"80%", margin:"auto", marginTop:"20px", marginBottom:"20px"}}>
      <Box sx={{ margin: "20px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="demo-simple-select-label">Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="medium"
            value={date}
            label="Date"
            onChange={handleChange}
          >
            <MenuItem value={1}>ID</MenuItem>
            <MenuItem value={2}>Nationality</MenuItem>
            <MenuItem value={3}>Location</MenuItem>
          </Select>
        </FormControl>
        <PDFDownloadLink style={{textDecoration:"none"}} document={<MyDocument data={tableInfo} />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? (
            "Loading document..."
          ) : (
            <Button sx={{textDecoration:"none", height:"56px", marginLeft:"10px"}} size="large" variant="contained">Download(PDF)</Button>
          )
        }
      </PDFDownloadLink>

      </Box>
      
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Nationality</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Monday</TableCell>
              <TableCell align="right">Tuesday</TableCell>
              <TableCell align="right">Wednesday</TableCell>
              <TableCell align="right">Thursday</TableCell>
              <TableCell align="right">Friday</TableCell>
              <TableCell align="right">Saturday</TableCell>
              <TableCell align="right">Sunday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableInfo.data &&
              tableInfo.data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{row.firstName}</TableCell>
                  <TableCell align="right">{row.nationality}</TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="right">{row.monday}</TableCell>
                  <TableCell align="right">{row.tuesday}</TableCell>
                  <TableCell align="right">{row.wednesday}</TableCell>
                  <TableCell align="right">{row.thursday}</TableCell>
                  <TableCell align="right">{row.friday}</TableCell>
                  <TableCell align="right">{row.saturday}</TableCell>
                  <TableCell align="right">{row.sunday}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
};

export default Home;
