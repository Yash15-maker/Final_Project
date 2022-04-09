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

export default function AddModal(props) {
 
const {advanced,setAdvanced,AdvancedSearch}=props;

   const [DI,setDI]=React.useState('');
   const [ID,setID]=React.useState('');
   const [CN,setCN]=React.useState('');
   const [BY,setBY]=React.useState('');
   
   

   const onIDFetch = (event) => {
    setID(event.target.value);
}
const onDIFetch= (event) => {
  setDI(event.target.value);
}
const onCNFetch= (event) => {
  setCN(event.target.value);
}
const onBYFetch= (event) => {
  setBY(event.target.value);
}

   const FetchAdvancedData=()=>{
    // event.preventDefault();
 
    const data={
        doc_id: DI,
        invoice_id: ID,
        cust_number: CN,
        buisness_year: BY
      }
      AdvancedSearch(data);
     console.log(data);
      setAdvanced(false);
    }
    




const classes = useStyles();
  return (
    
    <div className={classes.main}>
   
      <Dialog open={advanced}   aria-labelledby="form-dialog-title" >
        <DialogTitle className={classes.root} id="form-dialog-title">Advanced Search</DialogTitle>
        <DialogContent className={classes.root}>
         
      <DialogContentText className={classes.text}>
      <form noValidate autoComplete="off">
              <TextField
                id="filled-secondary"
                label="Document Id"
                variant="filled"
                style={{
                  backgroundColor: "white",
                 borderRadius: "2px",
                  marginLeft: "0px",
                  color:"white",
               
                }}
                className={classes.textField}
              onChange={onIDFetch}
              />
            </form>
            <form noValidate autoComplete="off">
              <TextField
                id="filled-secondary"
                label="Invoice Id"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                  marginLeft: "30px",
                }}
                className={classes.textField}
               onChange={onDIFetch}
              />
            </form>
            
      </DialogContentText><DialogContentText className={classes.text}>
      <form noValidate autoComplete="off">
              <TextField
                id="filled-secondary"
                label="Customer Number"
                variant="filled"
                style={{
                  backgroundColor: "white",
                 borderRadius: "2px",
                  marginLeft: "0px",
                  color:"white"
                }}
                className={classes.textField}
                onChange={onCNFetch}
              />
            </form>
            <form noValidate autoComplete="off">
              <TextField
                id="filled-secondary"
                label="Buisness Year"
                variant="filled"
                style={{
                  backgroundColor: "white",
                  borderRadius: "2px",
                  marginLeft: "30px",
                }}
                className={classes.textField}
              onChange={onBYFetch}
              />
            </form>
            
      </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttons}>
          
       
          <Button variant="outlined"  disableElevation  onClick={()=>{
              FetchAdvancedData();
        
          }} color="primary" className={classes.button1} >
Search
</Button>
          <Button variant="outlined"  disableElevation  onClick={()=>{
              setAdvanced(false);
          }} color="primary" className={classes.button1} >
        Cancel
          </Button>
     
        </DialogActions>
      </Dialog>
    </div>
  );
}
