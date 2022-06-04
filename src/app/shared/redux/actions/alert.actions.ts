import { createAction, props } from '@ngrx/store';
import { AlertInterface } from '../../interfaces/alert';
/**
 * actions para el componente de alerta
 */
export const setAlert = createAction(
    '[alert] setAlert',
    props<{ value: AlertInterface }>()
);

export const closeAlert = createAction(
    '[alert] close'
);


