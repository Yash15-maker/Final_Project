import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

        root: {
          color: "white",
          backgroundColor: "#333c48",
        },
     text:{
         color: "white",
     },
buttons:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#2A3E4C",
},
button1:{
    width:"50%",
    color: "white",
    borderColor: "white",
}
}));

export default function DeleteModal(props) {
 
const {open,setOpen}=props;

const classes = useStyles();
  return (
    
    <div >
   
      <Dialog open={open}   aria-labelledby="form-dialog-title"  >
        <DialogTitle className={classes.root} id="form-dialog-title">Delete</DialogTitle>
        <DialogContent className={classes.root}>
         
      <DialogContentText className={classes.text}>
         <h3> Are you sure you want to delete the record[s]?</h3>
      </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttons}>
           
       
          <Button variant="outlined"  disableElevation  onClick={()=>{
              setOpen(false);
          }} color="primary" className={classes.button1} >
    Delete
</Button>
          <Button variant="outlined"  disableElevation  onClick={()=>{
              setOpen(false);
          }} color="primary" className={classes.button1} >
        Cancel
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
