import Paper from '@mui/material/Paper';
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { ModeEdit, Delete } from '@mui/icons-material';
import { IconButton, Tooltip } from '@material-ui/core';
import { MyLink } from '../styles';
import { ChangeEvent, useContext, useState } from 'react';
import { StateContext } from '../Contexts';
import { IColumn, IData } from '../@types';

export function Table() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const {setIsOpen} = useContext(StateContext);

    const handleOpen = (event: any) => {
        event.preventDefault();
        setIsOpen(true);
    }

    const columns: readonly IColumn[] = [
        { id: 'name', label: 'Nome', minWidth: 170 },
        { id: 'email', label: 'Email', minWidth: 170 },
        { id: 'phone', label: 'Telefone', minWidth: 130 },
        { id: 'birth_date', label: 'Data de Nascimento', minWidth: 130 },
        { id: 'salary', label: 'Salário', minWidth: 130 },
        { id: 'created_at', label: 'Contratado em', minWidth: 130 },
        { id: 'actions', label: 'Ações', minWidth: 60 },
    ];

    function createData(
        name: string,
        email: string,
        phone: string,
        birth_date: string,
        salary: string,
        created_at: string
    ): IData {
        return {
            name, email, phone, birth_date, salary, created_at, actions: <div>
                <MyLink to="/editEmployee">
                    <Tooltip title="Editar">
                        <IconButton>
                            <ModeEdit color="primary" />
                        </IconButton>
                    </Tooltip>
                </MyLink>
                <Tooltip title="Deletar">
                    <IconButton onClick={handleOpen}>
                        <Delete color='error' />
                    </IconButton>
                </Tooltip></div>
        };
    }
    
    const rows = [
        createData('Thalis Zambarda', "thaliszambarda@gmail.com", "53999575436", "29/04/1999", "R$ 3500,00", "25/07/2022"),
        createData('Enzo', "enzofulano@gmail.com", "53999875438", "01/04/1992", "R$ 1500,00", "01/04/2023"),
    ];
    
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <MuiTable stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.name} component={MyLink} to='/detailsEmployee'>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>

                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}

                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </MuiTable>
                    </TableContainer>
                    <TablePagination
                        labelRowsPerPage="Linhas por página"
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
        </div>
    )
}