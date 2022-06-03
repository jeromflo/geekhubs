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
        return state.filter((el: Item) => el.id !== value);
    }), on(actions.reset, state => initialState)

);

