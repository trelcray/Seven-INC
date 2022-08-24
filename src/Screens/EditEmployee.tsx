import { Box, Container, Grid } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import { MyLink, MyTypography } from "../styles";
import { ButtonSubmit } from "../Components/ButtonSubmit";
import { DateTimePicker } from "../Components/DataTimePicker";
import { InputText } from "../Components/InputText";
import { useNavigate } from "react-router-dom";
import { Button } from "../Components/Button";
import { Header } from "../Components/Header";
import { Cancel, Edit } from '@mui/icons-material';
import { IInitialFormState } from "../@types";

export function EditEmployee() {

    const navigate = useNavigate();

    const INITIAL_FORM_STATE: IInitialFormState = {
        name: '',
        email: '',
        phone: '',
        birth_date: '',
        salary: '',
        created_at: ''
    };

    const FORM_VALIDATION = Yup.object().shape({
        name: Yup.string()
            .required('Por favor preencha com um nome!'),

        email: Yup.string()
            .email('Email inválido!')
            .required('Por favor preencha com um Email!'),

        phone: Yup.number()
            .integer()
            .typeError('Número de telefone inválido!')
            .required('Por favor preencha com um telefone!'),

        birth_date: Yup.date()
            .required('Por favor preencha com uma data!'),

        salary: Yup.string()
            .required('Por favor preencha com um valor!'),

        created_at: Yup.date()
            .required('Por favor preencha com uma data!'),
    });

    return (
        <div>
            <Header />
            <Box sx={{ p: 2 }}>
                <Grid container>
                    <Container maxWidth="md">
                        <div>

                            <Formik
                                initialValues={{
                                    ...INITIAL_FORM_STATE
                                }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={(values, actions) => {
                                    alert(JSON.stringify(values, null, 2));
                                    actions.setSubmitting(false);
                                    navigate({
                                        pathname: "/"
                                    })
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12}>
                                            <MyTypography>
                                                Editar dados do Funcionário
                                            </MyTypography>
                                        </Grid>

                                        <Grid item xs={12} md={6} lg={6}>
                                            <InputText name="name" label="Seu Nome" />
                                        </Grid>

                                        <Grid item xs={12} md={6} lg={6}>
                                            <InputText name="email" label="Seu Email" />
                                        </Grid>

                                        <Grid item xs={12} md={6} lg={6}>
                                            <InputText name="phone" label="Seu Telefone" />
                                        </Grid>

                                        <Grid item xs={12} md={6} lg={6}>
                                            <DateTimePicker name="birth_date" label="Seu Aniversário" />
                                        </Grid>

                                        <Grid item xs={12} md={6} lg={6}>
                                            <InputText name="salary" label="Seu Salário" />
                                        </Grid>

                                        <Grid item xs={12} md={6} lg={6}>
                                            <DateTimePicker name="created_at" label="Data de Contratação" />
                                        </Grid>

                                        <Grid xs={12} style={{ marginBottom: 8, marginTop: 8 }}>
                                            <ButtonSubmit startIcon={<Edit />}>
                                                Editar Funcionário
                                            </ButtonSubmit>
                                        </Grid>

                                        <Grid xs={12} >
                                            <MyLink to="/">
                                                <Button color='secondary' startIcon={<Cancel />}>
                                                    Cancelar
                                                </Button>
                                            </MyLink>
                                        </Grid>

                                    </Grid>
                                </Form>
                            </Formik>

                        </div>
                    </Container>
                </Grid>
            </Box>
        </div>
    )
}