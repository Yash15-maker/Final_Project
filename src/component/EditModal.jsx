import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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

export default function EditModal(props) {
 
const {edit,setEdit,checkBox,EditFunction}=props;

const [IcEdit, setIcEdit] = React.useState('');
const [CptEdit, setCptEdit] = React.useState('');

const onICEditChange = (event) => {
  setIcEdit(event.target.value);

}

const onCPTEditChange = (event) => {
  setCptEdit(event.target.value);
}

const notify = () => {
  toast.success("Successfully Edited!",{
    position: "top-center",
  });
}

const onEditHandler = (event) => {

  console.log("@@" + checkBox[0]);
  console.log(IcEdit)
  const editDetails = {
      sl_no: checkBox[0],
      invoice_currency: IcEdit,
      cust_payment_terms: CptEdit
  }

  EditFunction(editDetails);
  
  setEdit(false);
}

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
                onChange={onICEditChange}
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
                onChange={onCPTEditChange}
              />
            </form>
      </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttons}>
          
       
          <Button variant="outlined"  disableElevation  onClick={() => {
              onEditHandler();
              notify();
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

      <ToastContainer position="top-center"
autoClose={600}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}/>
    </div>
  );
}
