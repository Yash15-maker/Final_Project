let fieldarr=[
    "sl_no",
  "business_code",
  "cust_number",
  "clear_date",
  "buisness_year",
  "doc_id",
  "posting_date",
  "document_create_date",
  "document_create_date1",
  "due_in_date",
  "invoice_currency",
  "document_type",
  "posting_id",
  "area_business",
  "total_open_amount",
  "baseline_create_date",
  "cust_payment_terms",
  "invoice_id",
  "isOpen",
  "aging_bucket",
  "is_deleted",
];
let headarr=[
    "Sl No.",
  "Business Code",
  "Customer Number",
  "Clear Date",
  "Buisness Year",
  "Doc ID",
  "Posting Date",
  "Document Create Date",
  "Document Create Date1",
  "Due In Date",
  "Invoice Currency",
  "Document Type",
  "posting ID",
  "Area Business",
  "Total Open Amount",
  "Baseline Create Date",
  "Customer Payment Terms",
  "Invoice ID",
  "Is Open",
  "Aging Bucket",
  "Is Deleted",
];


let mainarr=[];

for(let i=0;i<fieldarr.length;i++){
    mainarr.push({
        field:fieldarr[i],
        headerName:headarr[i],
        width:150,
        editable:false,
        sortable:true
    })
}

export default mainarr;
