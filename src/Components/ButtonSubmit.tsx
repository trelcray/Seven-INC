import { Button } from '@material-ui/core'
import { useFormikContext } from 'formik'
import { IButtonProps } from '../@types';

export const ButtonSubmit = ({ children, ...otherProps }: IButtonProps ) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        ...otherProps,
        fullWidth: true,
        onClick: handleSubmit
    }

    return (
        <Button
        variant='contained'
        color='primary'
        {...configButton}
        >
            {children}
        </Button>
    )
}