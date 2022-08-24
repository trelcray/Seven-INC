import { Box, Grid } from "@material-ui/core";
import { Header } from "../Components/Header";
import { MyLink, MyTypography } from "../styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from "../Components/Button";
import { ArrowCircleLeft } from '@mui/icons-material';

export function DetailsEmployee() {
    return (
        <div>
            <Header />
            <Box sx={{ p: 2 }}>
                <Grid item xs={12}>
                    <MyTypography>
                        Detalhes do Funcionário
                    </MyTypography>
                </Grid>

                <Grid item xs={12}>
                <Card variant="outlined" sx={{ minWidth: 275, margin: 2 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Funcionário Nome
                        </Typography>
                        <Typography variant="h5" component="div">
                            Cargo: Desenvolvedor Front-end
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Modalidade: Remoto
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1.5 }}>
                            Idade: 23
                            <br />
                            Tempo na Empresa: 1 mês
                            <br />
                            Contato: 53000000000, contato@gmail.com
                            <br />
                            Remuneração atual: R$ 3500,00
                        </Typography>
                        <Typography variant="body2">
                            Ultima alteração em: 25/09/2022
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ mb: 1.5 }}>
                        <MyLink to='/'>
                        <Button color='primary' startIcon={<ArrowCircleLeft />}>
                            Voltar
                        </Button>
                        </MyLink>
                    </CardActions>
                </Card>
                </Grid>
            </Box>

        </div>
    )
}