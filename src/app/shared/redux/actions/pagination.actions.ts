import { createAction } from '@ngrx/store';
/**
 * logica para la paginazacion
 */
export const up = createAction(
    '[pagination] up',

);

export const down = createAction(
    '[pagination] down');

export const reset = createAction(
    '[pagination] reset');
