import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        backgroundColor: "#333c48",
      },
   
buttons:{
    display: "flex",
 flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#333c48"
},
button1:{
    width:"50%",
    backgroundColor: "#2A3E4C",
    borderColor: "white",
    color: "white",
},
textField: {
    marginTop: "10px",
  },
  text:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    color:  "white",
  }
}));

export default function DeleteModal(props) {
 
const {edit,setEdit}=props;
const classes = useStyles();
  return (
    
    <div className={classes.main}>
   
      <Dialog open={edit}   aria-labelledby="form-dialog-title" >
        <DialogTitle className={classes.root} id="form-dialog-title">Edit</DialogTitle>
        <DialogContent className={classes.root}>
         
      <DialogContentText className={classes.text}>
      <form noValidate autoComplete="off">
              <TextField
                id="filled-secondary"
                label="Invoice Currency"
                variant="filled"
                style={{
                  backgroundColor: "white",
                 borderRadius: "2px",
                  marginLeft: "0px",
                  color:"white"
                }}
                className={classes.textField}
            
              />
            </form>
            <form noValidate autoComplete="off">
              <TextField
                id="filled-secondary"
                label="Customer Payment Terms"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                  marginLeft: "30px",
                }}
                className={classes.textField}
            
              />
            </form>
      </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttons}>
          
       
          <Button variant="outlined"  disableElevation  onClick={()=>{
              setEdit(false);
          }} color="primary" className={classes.button1} >
  Edit
</Button>
          <Button variant="outlined"  disableElevation  onClick={()=>{
              setEdit(false);
          }} color="primary" className={classes.button1} >
        Cancel
          </Button>
     
        </DialogActions>
      </Dialog>
    </div>
  );
}
