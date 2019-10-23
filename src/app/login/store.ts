
import { tassign } from 'tassign';
import {LOGIN_FORM} from '../actions';

export interface LoginAppState {
    formObj: any;
}

export const LOGIN_INITIAL_STATE:  LoginAppState = {
    formObj: [],
   
    
}

function logFilter(state: LoginAppState, action){
    var newState = state;
    newState.formObj = action.formObj
    return tassign(state, newState);
}



 export function LoginReducer(state: LoginAppState = LOGIN_INITIAL_STATE, action): LoginAppState {
    switch(action.type){
         case LOGIN_FORM: return logFilter(state, action);
        //  case DETAIL_DB_DATA: return detailDbObj(state, action);
        //  case FORM_DATA: return formObj(state, action);
        //  case ACTIVE_PANNEL: return activePannel(state, action);
     }
     return state;
 }