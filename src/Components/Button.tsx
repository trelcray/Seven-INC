import { Button as MuiButton} from '@material-ui/core'
import { IButtonProps } from '../@types'

export const Button = ({ children, ...otherProps }: IButtonProps ) => {
    return (
        <MuiButton
        type='button'
        fullWidth={true}
        variant='contained'
        {...otherProps}
        >
            {children}
        </MuiButton>
    )
}