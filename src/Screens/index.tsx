import { Button } from '../Components/Button';
import { AddCircle } from '@mui/icons-material';
import { MyLink, MyTypography } from '../styles';
import { Header } from '../Components/Header';
import { Box, Grid } from '@mui/material';
import { Table } from '../Components/Table';
import { Modal } from '../Components/Modal';

export function Index() {    

    return (
        <div>
            <Header />
            <Box sx={{ p: 2 }}>
                <Grid item xs={12}>
                    <MyTypography>
                        Listagem de Funcionários
                    </MyTypography>
                </Grid>

                <MyLink to="/createEmployee">
                    <Button color='primary' startIcon={<AddCircle />}>
                         Adicionar Funcionário
                    </Button>
                </MyLink>
                <Table/>
            </Box>
            <Modal/>

        </div>
    );
}