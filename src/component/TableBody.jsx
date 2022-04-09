import { DataGrid } from "@material-ui/data-grid";
import * as React from "react";
import GetLabel from "./GetLabel";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import axios from "axios";
import RefreshIcon from "@mui/icons-material/Refresh";
import AdvancedModal from "./AdvancedModal";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiCheckbox-root": {
      color: "#fff",
    },
    "& .MuiToolbar-root": {
      color: "#fff",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      textOverflow: "clip",
      whiteSpace: "break-spaces",
      lineHeight: 1,
    },
    "& .MuiDataGrid-iconSeparator": {
      color: "transparent",
    },

    backgroundColor: "#283D4A",
    marginTop: "10px",
  },
  grid: {
    color: "white",
    marginTop: "10px",
    border: "none",
  },
  grid1: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    marginRight: "50px",
  },
  button1: {
    color: "white",
    border: "2px solid",
    borderColor: "#303F9F",
  },
  button_2: {
    width: "1000px",
    backgroundColor: "#283D4A"
  },
  buttond: {
    marginTop: "20px",
  },
  buttond2: {
    marginTop: "20px",
   
    width: "100%",
    marginRight: "0px",
  },
  textField: {
    marginTop: "10px",
  },
  button_1: {
    color: "white",
    border: "2px solid",
    borderColor: "#303F9F",
    width: "1500px",
    backgroundColor: "#283D4A"
  },
  button1_pr: {
    backgroundColor: "#17B1F1",
    color: "white",
  },
}));

const columns = GetLabel;

export default function Table() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [q, setQ] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [addOpen, setaddOpen] = React.useState(false);
  const [advanced, setAdvanced] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [loading,setLoading]=React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const handleClickEdit = () => {
    setEdit(true);
  };

  const handleClickAdd = () => {
    setaddOpen(true);
  };

  const handleClickAdvanced = () => {
    setAdvanced(true);
  };

  const fetchdata = () => {
    setLoading(true);
    fetch("http://localhost:8080/HRC_BackEnd/Get")
    
      .then((res) => res.json())
      
      .then((data) =>{setData(data) 
        setLoading(false)} );
      
      
  };

  const fetchdelete = async () => {
    const response = await fetch("http://localhost:8080/HRC_BackEnd/Delete", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ sl_no: selectedRows.map((row) => row.sl_no) }),
    });
    const content = await response.json();
    console.log(content);
  };

  const Adddata = async (addData) => {
    const response = await fetch("http://localhost:8080/HRC_BackEnd/Add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(addData),
    });
    const content_add = await response.json();
    console.log(content_add);
  };

  const Editdata = async (editData) => {
    axios
      .post(`http://localhost:8080/HRC_BackEnd/Edit`, null, {
        params: editData,
      })
      .then((response) => console.log(response))
      .catch((err) => console.warn(err));
  };

  const deleteData = async (deleteDataArr) => {
    let sl_string = DeleteHandle(deleteDataArr);
    const deleteData = {
      sl_no: sl_string,
    };
    console.log(deleteData);
    axios
      .post(`http://localhost:8080/HRC_BackEnd/Delete`, null, {
        params: deleteData,
      })
      .then((response) => console.log(response))
      .catch((err) => console.warn(err.response.data));
  };

  const AdvancedSearch = async (advanceData) => {
    const response = await fetch(
      `http://localhost:8080/HRC_BackEnd/Advanced?doc_id=${advanceData.doc_id}&invoice_id=${advanceData.invoice_id}&cust_number=${advanceData.cust_number}&buisness_year=${advanceData.buisness_year}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      }
    );
    const content_add = await response.json();
    console.log("The data{content_add}", content_add);

    setData(content_add);
  };

  React.useEffect(() => {
    
    fetchdata();
   
  }, []);

  function search(infodata) {
    const newdata = infodata.filter((info) =>
      info.cust_number.toString().startsWith(q)
    );

    return newdata;
  }

  const rowHandler = (event) => {
    console.log(event);
    setSelectedRows(event);
  };

  const DeleteHandle = (selectedRows) => {
    let selectedRowsString = "";
    for (let i = 0; i < selectedRows.length; i++) {
      selectedRowsString = selectedRowsString + selectedRows[i] + ",";
    }
    var str = selectedRowsString.substring(0, selectedRowsString.length - 1);
    console.log("SRSH" + str);
    return str;
  };

  return (
    <div className={classes.root}>
      <>
        <Grid container justifyContent="space-evenly" direction="row">
          <Grid item style={{ width: "40%" }}>
            <ButtonGroup
              variant="outlined"
              color="primary"
              aria-label="contained primary button group"
              fullWidth={true}
              className={classes.buttond}
            >
              <Button className={classes.button1_pr}>PREDICT</Button>
              <Button className={classes.button1}>ANALYTICS VIEW</Button>
              <Button className={classes.button1} onClick={handleClickAdvanced}>
                ADVANCED SEARCH
              </Button>
            </ButtonGroup>
          </Grid>

          <Grid item style={{ marginRight: "20px" }}>
            <Button
              style={{ marginTop: "20px",color: "#1B83BA",borderColor: "#1B83BA"}}	
              onClick={() => {
                fetchdata();
              }}
              variant="outlined"
            >
              <RefreshIcon style={{color: "#1B83BA"}}/>
            </Button>
          </Grid>

          <Grid item style={{ marginRight: "70px" }}>
            <form noValidate autoComplete="off">
              <TextField
                id="filled-secondary"
                label="Search Customer Id"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
                className={classes.textField}
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                }}
              />
            </form>
          </Grid>

          <Grid item style={{ width: "25%", marginRight: "30px" }}>
            <ButtonGroup
              variant="outlined"
              color="primary"
              aria-label="contained primary button group"
              fullWidth={true}
              className={classes.buttond2}
            >
              <Button variant="contained" className={classes.button_1} onClick={handleClickAdd}>
                ADD
              </Button>

              <Button
                className={classes.button_2}
                onClick={handleClickEdit}
                style={
                  selectedRows.length === 1
                    ? {  }
                    : {
                        pointerEvents: "none",
                        opacity: "0.5",
                        borderColor: "#283D4A",
                        
                      }
                }
              >
                EDIT
              </Button>
              <Button
                className={classes.button_1}
                onClick={handleClickOpen}
               
                style={
                  selectedRows.length >= 1
                    ? {}
                    : { pointerEvents: "none", opacity: "0.5",
                  
                   }
                }
              >
                DELETE
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </>
      <div style={{ height: 360, width: "100%", backgroundColor: "#283D4A" }}>
        {!loading
        ?
        <DataGrid
          rows={search(data)}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          disableColumnMenu={true}
          sortable={true}
          className={classes.grid}
          getRowId={(row) => row.sl_no}
          rowHeight={30}
          onSelectionModelChange={rowHandler}
          // onSelectionModelChange={(One) => {
          //   const eachOne = new Set(One);

          //   const hereSelectedRows = data.filter((row) =>
          //     eachOne.has(row.sl_no)
          //   );
          //   console.log(hereSelectedRows);
          //   console.log(hereSelectedRows.sl_no)
          //   setSelectedRows(hereSelectedRows);

          // }}
        />:<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
   
    </Stack>}
      </div>
      <DeleteModal
        open={open}
        setOpen={setOpen}
        fetchdelete={fetchdelete}
        checkbox={selectedRows}
        deleteProp={deleteData}
      />
      <EditModal
        edit={edit}
        setEdit={setEdit}
        checkBox={selectedRows}
        EditFunction={Editdata}
      />
      <AddModal
        addOpen={addOpen}
        setaddOpen={setaddOpen}
        AddDataFunction={Adddata}
      />
      <AdvancedModal
        advanced={advanced}
        setAdvanced={setAdvanced}
        AdvancedSearch={AdvancedSearch}
      />
    </div>
  );
}
