import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./css/AddModal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
  },
  root: {
    color: "white",
    backgroundColor: "#333c48",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#2A3E4C",
  },
  button1: {
    width: "50%",
    backgroundColor: "#2A3E4C",
    borderColor: "white",
    color: "white",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    backgroundColor: "white",
    width: 205,
  },
}));

export default function AddModal(props) {
  const { addOpen, setaddOpen, AddDataFunction } = props;
  const classes = useStyles();

  const [Bc, setBc] = React.useState("");
  const [Cn, setCn] = React.useState(0);
  const [Cd, setCd] = React.useState("");
  const [By, setBy] = React.useState("");
  const [Did, setDid] = React.useState("");
  const [Pd, setPd] = React.useState("");
  const [Dcd, setDcd] = React.useState("");
  const [Dd, setDd] = React.useState("");
  const [Ic, setIc] = React.useState("");
  const [Dt, setDt] = React.useState("");
  const [Pid, setPid] = React.useState("");
  const [Toa, setToa] = React.useState("");
  const [Bcd, setBcd] = React.useState("");
  const [Cpt, setCpt] = React.useState("");
  const [Iid, setIid] = React.useState("");

  const onBCChange = (event) => {
    setBc(event.target.value);
  };
  const onCNChange = (event) => {
    setCn(event.target.value);
  };
  const onCDChange = (event) => {
    setCd(event.target.value);
  };
  const onBYChange = (event) => {
    setBy(event.target.value);
  };
  const onDIDChange = (event) => {
    setDid(event.target.value);
  };
  const onPDChange = (event) => {
    setPd(event.target.value);
  };
  const onDCDChange = (event) => {
    setDcd(event.target.value);
  };
  const onDDChange = (event) => {
    setDd(event.target.value);
  };
  const onICChange = (event) => {
    setIc(event.target.value);
  };
  const onDTChange = (event) => {
    setDt(event.target.value);
  };
  const onPIDChange = (event) => {
    setPid(event.target.value);
  };
  const onTOAChange = (event) => {
    setToa(event.target.value);
  };
  const onBCDChange = (event) => {
    setBcd(event.target.value);
  };
  const onCPTChange = (event) => {
    setCpt(event.target.value);
  };
  const onIIDChange = (event) => {
    setIid(event.target.value);
  };

  const notify = () => {
    toast.success("Successfully Added!", {
      position: "top-center",
    });
  };

  const SubmitHandler = (event) => {
    const inputDetails = {
      business_code: Bc,
      cust_number: Cn,
      clear_date: new Date(Cd),
      buisness_year: By,
      doc_id: Did,
      posting_date: Pd,
      document_create_date: new Date(Dcd),
      document_create_date1: "",
      due_in_date: new Date(Dd),
      invoice_currency: Ic,
      document_type: Dt,
      posting_id: Pid,
      area_business: "",
      total_open_amount: Toa,
      baseline_create_date: new Date(Bcd),
      cust_payment_terms: Cpt,
      invoice_id: Iid,
      isOpen: 0,
      is_deleted: 0,
    };
    AddDataFunction(inputDetails);
    console.log("The number ", inputDetails);
    setaddOpen(false);
  };
  return (
    <div>
      <Dialog
        open={addOpen}
        aria-labelledby="form-dialog-title"
        maxWidth={{
          xs: "xs",
        }}
      >
        <DialogTitle className={classes.root} id="form-dialog-title">
          ADD
        </DialogTitle>

        <DialogActions className={classes.root}>
          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={6} sm={3}>
              <TextField
                id="filled-secondary"
                label="Buisness Code"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                }}
                className={classes.paper}
                onChange={onBCChange}
              ></TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="filled-secondary"
                label="Customer Number"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                }}
                className={classes.paper}
                onChange={onCNChange}
                type="number"
              ></TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="date"
                label="Clear Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onCDChange}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="filled-secondary"
                label="Buisness Year"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                }}
                className={classes.paper}
                onChange={onBYChange}
              ></TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="filled-secondary"
                label="Document id"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                }}
                className={classes.paper}
                onChange={onDIDChange}
              ></TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="date"
                label="Posting Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onPDChange}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="date"
                label="Document Create Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onDCDChange}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="date"
                label="Due Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onDDChange}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="filled-secondary"
                label="Invoice Currency"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                }}
                className={classes.paper}
                onChange={onICChange}
              ></TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="filled-secondary"
                label="Document type"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                }}
                className={classes.paper}
                onChange={onDTChange}
              ></TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="filled-secondary"
                label="Posting Id"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                }}
                className={classes.paper}
                onChange={onPIDChange}
              ></TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="filled-secondary"
                label="Total Open Amount"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                }}
                className={classes.paper}
                onChange={onTOAChange}
              ></TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="date"
                label="Baseline Create Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onBCDChange}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="filled-secondary"
                label="Customer Payment Terms"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                }}
                className={classes.paper}
                onChange={onCPTChange}
              ></TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="filled-secondary"
                label="Invoice Id"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                }}
                className={classes.paper}
                onChange={onIIDChange}
              ></TextField>
            </Grid>
          </Grid>
        </DialogActions>
        <DialogActions className={classes.buttons}>
          <Button
            variant="outlined"
            disableElevation
            onClick={() => {
              SubmitHandler();
              notify();
            }}
            color="primary"
            className={classes.button1}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            disableElevation
            onClick={() => {
              setaddOpen(false);
            }}
            color="primary"
            className={classes.button1}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}
