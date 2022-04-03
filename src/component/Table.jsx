import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import GetLabel from './GetLabel'

  

const useStyles = makeStyles((theme) => ({
    root:{
        "& .MuiCheckbox-root": {
            color: "#fff",
          },
          "& .MuiToolbar-root": {
            color: "#fff",
          },
          backgroundColor: '#283D4A'
    },
grid:{
    color: "white",	
}
}));

const columns = GetLabel;




export default function DataTable() {
    const [data, setData] = React.useState([]);
    
const fetchdata = () => {
    fetch('http://localhost:8080/HRC_BackEnd/Get')
    .then(res => res.json())
    .then(data => setData(data));


}

    const classes = useStyles();
    
    React.useEffect(() => {

       fetchdata();

    },[]);
  return (
    <div style={{ height: 400, width: '100%' }} className={classes.root}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={100}
        checkboxSelection
        disableSelectionOnClick
        disableColumnMenu={true}
        sortable={false}
        className={classes.grid}
        getRowId={(row) => row.sl_no}
        
      />
    </div>
  );
}
