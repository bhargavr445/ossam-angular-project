import { tassign } from 'tassign';
import { STUDENT_FILTER_DATA, STUDENT_RESULT_DATA } from '../actions';

export interface StudentAppState {
   studentFilterFormData: any;
   studentResultData:any;
}

export const STUDENT_INITIAL_STATE:  StudentAppState = {
    
    studentFilterFormData: null,
    studentResultData:null,
 
}

function studentFilter(state: StudentAppState, action){
    var newState = state;
    newState.studentFilterFormData = action.value
    return tassign(state, newState);
}

function studentResults(state: StudentAppState, action){
    var newState = state;
    newState.studentResultData = action.value;
    return tassign(state, newState);
}

 export function studentReducer(state: StudentAppState = STUDENT_INITIAL_STATE, action): StudentAppState {
    switch(action.type){

        case STUDENT_FILTER_DATA: return studentFilter(state, action);
        case STUDENT_RESULT_DATA: return studentResults(state, action);
     }
     return state;
 }