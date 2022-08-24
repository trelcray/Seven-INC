import { Color } from '@mui/material';
import { MouseEvent } from 'react';


export interface IInitialFormState {
    name: string,
    document?: string,
    email: string,
    phone: string,
    birth_date: string,
    salary: string,
    created_at: string,
}

export interface IButtonProps {
    children: string;
    color?: any;
    startIcon?: JSX.Element;
    onClick?(e: MouseEvent<HTMLElement>): void;
}

export interface IDateTimePicker {
    name: string;
    label: string;
}

export interface IInputText {
    name: string
    label: string
}

export interface IColumn {
    id: 'name' | 'email' | 'phone' | 'birth_date' | 'salary' | 'created_at' | 'actions';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;

}

export interface IData {
    name: string,
    email: string,
    phone: string,
    birth_date: string,
    salary: string,
    created_at: string,
    actions: any
}