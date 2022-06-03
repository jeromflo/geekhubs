export interface AlertInterface {
    icon?: 'error' | 'success' | 'info' | 'warning';
    timer?: number;
    tittle?: string;
    timerProgressBar?: boolean;
    showCancelButton?: boolean;
    showConfirmButton?: boolean;
    close?: boolean
}

