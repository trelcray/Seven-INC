import { useContext } from "react";
import { StateContext } from "../Contexts";
import { Modal as MuiModal} from '@material-ui/core';
import { Box, Grid, Typography } from '@mui/material';
import { style } from '../styles';
import { Button } from "./Button";
import { Cancel, Delete } from "@mui/icons-material";


export function Modal() {
    const {isOpen, setIsOpen} = useContext(StateContext);
    const handleClose = () => setIsOpen(false);

    const handleClosed = () => {
        setIsOpen(false);
        alert("Excluido com sucesso!")
    }
    return (
        <div>
            <MuiModal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Excluir Funcionário
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Você realmente deseja excluir este funcionário?
                    </Typography>

                    <Grid container sx={{ mt: 5 }} spacing={1}>
                        <Grid item xs={4}>
                            <Button color='primary' startIcon={<Cancel />} onClick={handleClose}>Cancelar</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button color='secondary' startIcon={<Delete />} onClick={handleClosed}>excluir</Button>
                        </Grid>
                    </Grid>

                </Box>
            </MuiModal>
        </div>
    )
}