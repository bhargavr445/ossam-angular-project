

import { tassign } from 'tassign';
import { combineReducers } from 'redux';
import { LoginAppState, LOGIN_INITIAL_STATE, LoginReducer} from './login/store'

export interface AppState {

login: LoginAppState,


}


export const INITIAL_STATE: AppState = {

    login: LOGIN_INITIAL_STATE,



}




export const rootReducer = combineReducers({
    login: LoginReducer

})
