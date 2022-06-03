import { Action, createReducer, on } from '@ngrx/store';
import { AlertInterface } from '../../interfaces/alert';
import * as actions from '../actions/alert.actions';

export function alertReducer(state: any, action: Action) {
    return reducer(state, action);
}
const initialState: AlertInterface = {
    close: true
};

const reducer = createReducer(
    initialState,
    on(actions.setAlert, (state, prop) => {
        let copy: AlertInterface = { ...state };
        copy.close = false;
        copy.icon = prop.value.icon;
        copy.timer = prop.value.timer;
        copy.tittle = prop.value.tittle;
        copy.timerProgressBar = prop.value.timerProgressBar;
        copy.showCancelButton = prop.value.showCancelButton;
        copy.showConfirmButton = prop.value.showConfirmButton;
        return copy;
    }),
    on(actions.closeAlert, (state) => ({ close: true })),

);