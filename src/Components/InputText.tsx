import { TextField } from "@material-ui/core";
import { useField } from "formik";
import { IInputText } from "../@types";

export const InputText = ({ name, ...otherProps }: IInputText) => {
     const [field, meta] = useField(name);

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        error: false,
        helperText: meta.initialError
    };

    if(meta && meta.touched && meta.error){
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (
        <TextField 
        variant="outlined"
        {...configTextField} 
        />
    )
};