import { createAction, props } from '@ngrx/store';
import { AlertInterface } from '../../interfaces/alert';

export const setAlert = createAction(
    '[alert] setAlert',
    props<{ value: AlertInterface }>()
);

export const closeAlert = createAction(
    '[alert] close'
);


