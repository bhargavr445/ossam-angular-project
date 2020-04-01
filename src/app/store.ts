

import { tassign } from 'tassign';
import { combineReducers } from 'redux';
import { LoginAppState, LOGIN_INITIAL_STATE, LoginReducer} from './login/store'
import { homeReducer, HomeAppState, HOME_INITIAL_STATE } from './home/store';
import { StudentAppState, STUDENT_INITIAL_STATE, studentReducer } from './student/store';

export interface AppState {

login: LoginAppState,
home: HomeAppState
student:StudentAppState,

}


export const INITIAL_STATE: AppState = {

    login: LOGIN_INITIAL_STATE,
    home: HOME_INITIAL_STATE,
    student:STUDENT_INITIAL_STATE,



}




export const rootReducer = combineReducers({
    login: LoginReducer,
    home: homeReducer,
    student:studentReducer,

})
