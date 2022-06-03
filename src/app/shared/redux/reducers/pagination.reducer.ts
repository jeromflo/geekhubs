import { Item } from './../../interfaces/item';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/pagination.actions';


export const initialState: number = 0;
export function paginationReducer(state: any, action: Action) {
    return featureReducer(state, action);
}
const featureReducer = createReducer(
    initialState,
    on(actions.up, (state,) => {
        return state + 1;
    }), on(actions.down, (state) => {
        return state == 0 ? 0 : state - 1;
    }), on(actions.reset, state => initialState)

);

