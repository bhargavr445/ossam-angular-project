import { tassign } from 'tassign';
import { PRODUCT_DATA, PERM_DATA } from '../actions';


export interface HomeAppState {
   resultList: any;
   permData: any;
}

export const HOME_INITIAL_STATE:  HomeAppState = {
    
   resultList: [],
   permData: null
    
}

function logFilter(state: HomeAppState, action){
    
}

function myProduct(state: HomeAppState, action) {
    var newState = state;
    newState.resultList = action.value
    return tassign(state, newState);
}

function permProduct(state: HomeAppState, action){
    var newState = state;
    newState.permData = action.value
    return tassign(state, newState);
}

 export function homeReducer(state: HomeAppState = HOME_INITIAL_STATE, action): HomeAppState {
    switch(action.type){
        //  case LOGIN_FORM: return logFilter(state, action);
        //  case DETAIL_DB_DATA: return detailDbObj(state, action);
        //  case FORM_DATA: return formObj(state, action);
        //  case ACTIVE_PANNEL: return activePannel(state, action);
        case PRODUCT_DATA: return myProduct(state, action);
        case PERM_DATA: return permProduct(state, action);
     }
     return state;
 }