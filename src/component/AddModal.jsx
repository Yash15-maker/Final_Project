import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./css/AddModal.css";
import {Grid} from "@material-ui/core";

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
    color: "white"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
  
    backgroundColor: "white",
    width: 205,
   
  },
 
  
}));

export default function DeleteModal(props) {
  const { addOpen, setaddOpen } = props;
  const classes = useStyles();
  return (
    <div>
      <Dialog open={addOpen} aria-labelledby="form-dialog-title" maxWidth={true}>
        <DialogTitle className={classes.root} id="form-dialog-title">ADD</DialogTitle>


        <DialogActions className={classes.root}>
        <Grid container spacing={3}  className={classes.grid} >
        <Grid item xs={6} sm={3}>
          <TextField   
          id="filled-secondary"
                label="Buisness Code"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                
                }}
          className={classes.paper}>xs=6 sm=3</TextField>
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
          className={classes.paper}>xs=6 sm=3</TextField>
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
          className={classes.paper}>xs=6 sm=3</TextField>
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
          className={classes.paper}>xs=6 sm=3</TextField>
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
      />
        </Grid><Grid item xs={6} sm={3}>
        <TextField
        id="date"
        label="Document Create Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Grid><Grid item xs={6} sm={3}>
        <TextField
        id="date"
        label="Due Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
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
          className={classes.paper}>xs=6 sm=3</TextField>
        </Grid><Grid item xs={6} sm={3}>
               <TextField   
          id="filled-secondary"
                label="Document type"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                
                }}
          className={classes.paper}>xs=6 sm=3</TextField>
        </Grid><Grid item xs={6} sm={3}>
               <TextField   
          id="filled-secondary"
                label="Posting Id"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                
                }}
          className={classes.paper}>xs=6 sm=3</TextField>
        </Grid><Grid item xs={6} sm={3}>
               <TextField   
          id="filled-secondary"
                label="Total Open Amount"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                
                }}
          className={classes.paper}>xs=6 sm=3</TextField>
        </Grid><Grid item xs={6} sm={3}>
        <TextField
        id="date"
        label="Baseline Create Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Grid><Grid item xs={6} sm={3}>
        <TextField   
          id="filled-secondary"
                label="Customer Payment Terms"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                
                }}
          className={classes.paper}>xs=6 sm=3</TextField>
        </Grid><Grid item xs={6} sm={3}>
               <TextField   
          id="filled-secondary"
                label="Invoice Id"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                
                }}
          className={classes.paper}>xs=6 sm=3</TextField>
        </Grid>
       </Grid>
        </DialogActions>
        <DialogActions className={classes.buttons}>






          <Button
            variant="outlined"
            disableElevation
            onClick={() => {
              setaddOpen(false);
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
    </div>
  );
}
