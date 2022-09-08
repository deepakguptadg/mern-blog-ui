import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'firstName', headerName: 'First name',minWidth: 150, flex: 1 },
    { field: 'lastName', headerName: 'Last name', minWidth: 150,flex: 1},
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 20
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        flex: 1,
        minWidth: 150,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: "action",
        headerName: "Action",
        sortable: false,
        flex: 1,
        minWidth: 100,
        renderCell: (params) => {
          return <Button variant="contained" size='small' onClick={()=>alert("OK")}>Click</Button>;
        }
      },

];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function BlogList({ Header }) {
    return (
        <>
            <Header />

            <Grid container justifyContent='center' my={3}>
                <Grid item xs={10}>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            // checkboxSelection
                        />
                    </div>

                </Grid>
            </Grid>
        </>
    );
}
