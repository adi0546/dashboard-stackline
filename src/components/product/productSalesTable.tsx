import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";
import { sxWhiteBox } from "styles/productStyles";

const columns: GridColDef[] = [
  { field: 'weekEnding', headerName: 'Week Ending', width: 150 },
  { field: 'retailSales', headerName: 'Retail Sales', width: 150 },
  { field: 'wholesaleSales', headerName: 'Wholesale Sales', width: 150 },
  { field: 'unitsSold', headerName: 'Units Sold', width: 150 },
  { field: 'retailerMargin', headerName: 'Retailer Margin', width: 150 },
];

const paginationModel = { page: 0, pageSize: 5 };

function ProductSalesTable(props: any) {
  const { product } = props;

  const columns: GridColDef[] = [
    { field: 'weekEnding', headerName: 'Week Ending', flex: 1 },
    { field: 'retailSales', headerName: 'Retail Sales', flex: 1 },
    { field: 'wholesaleSales', headerName: 'Wholesale Sales', flex: 1 },
    { field: 'unitsSold', headerName: 'Units Sold', flex: 1 },
    { field: 'retailerMargin', headerName: 'Retailer Margin', flex: 1 },
  ];

  const rows = product?.sales.map((sale: any, index: number) => ({
    id: index,
    weekEnding: sale.weekEnding,
    retailSales: sale.retailSales,
    wholesaleSales: sale.wholesaleSales,
    unitsSold: sale.unitsSold,
    retailerMargin: sale.retailerMargin,
  })) || [];

  return (
    <Box sx={{ ...sxWhiteBox, height: "auto" }}>
      <Box sx={{ p: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Box>
    </Box>
  );
}

export default ProductSalesTable;