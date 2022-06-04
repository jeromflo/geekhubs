import * as actions from './../actions/disabledButton.actions';
import { Action, createReducer, on } from '@ngrx/store';


export const initialState: boolean = false;
export function disabledButtonReducer(state: any, action: Action) {
    return featureReducer(state, action);
}
const featureReducer = createReducer(
    initialState,
    on(actions.disabledButton, state => true),
    on(actions.showButton, state => initialState)

);
