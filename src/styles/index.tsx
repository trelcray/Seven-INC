import { Typography} from "@material-ui/core";
import { styled } from '@mui/material'
import { Link, NavLink as DomLink } from "react-router-dom";

export const MyTypography = styled(Typography)(() => ({
    fontSize: '2rem', 
    fontWeight: 'bold', 
    textAlign: 'center',
    marginBottom: '1rem'
}));

export const MyLink = styled(Link)(() => ({
    textDecoration: 'none'
}));

export const NavLink = styled(DomLink)(() => ({
    textDecoration: 'none',
    color: 'white'
}));

export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};