import { TextField } from "@material-ui/core";
import { useField } from "formik";
import { IDateTimePicker } from "../@types";

export const DateTimePicker = ({ name, ...otherProps }: IDateTimePicker) => {
    const [field, meta] = useField(name);

    const configDateTimePicker = {
        ...field,
        ...otherProps,
        type: 'date',
        fullWidth: true,
        InputLabelProps: {
            shrink: true
        },
        error: false,
        helperText: meta.initialError
          
    };

    if (meta && meta.touched && meta.error) {
        configDateTimePicker.error = true;
        configDateTimePicker.helperText = meta.error;
    }
    
    return (
        <TextField 
        variant='outlined'
        {...configDateTimePicker}
        />
    )
}