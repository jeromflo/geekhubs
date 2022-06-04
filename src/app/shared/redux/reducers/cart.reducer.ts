import { Item } from './../../interfaces/item';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/cart.actions';


export const initialState: Item[] = [];
export function cartReducer(state: any, action: Action) {
    return featureReducer(state, action);
}
const featureReducer = createReducer(
    initialState,
    on(actions.addCart, (state, prop) => {
        let copy: Item[] = [...state];
        copy.push(prop.value);
        return copy;
    }), on(actions.remove, (state, { value }) => {

        let position = state.findIndex(item => item.id === value);
        return state.filter((item: Item, index: number) => index !== position); //se usa el filter, en vez del splice, por el splice muta el estado, ademas no comprobamos que la position sea negativa, por que aunque lo sea, no va a fallar
    }), on(actions.reset, state => initialState)

);

