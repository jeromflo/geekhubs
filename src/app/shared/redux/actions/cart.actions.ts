import { Item } from './../../interfaces/item';
import { createAction, props } from '@ngrx/store';

export const addCart = createAction(
    '[cart] addCart',
    props<{ value: Item }>()
);

export const remove = createAction(
    '[cart] remove',
    props<{ value: number }>()
);

export const reset = createAction(
    '[cart] reset',

);
