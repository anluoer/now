import {combineReducers} from 'redux';
let num=(state=1,action)=>{
    switch(action.type){
        case 'ADD':return state+1;
        case "REDUCE":return state-1;
        default:return state
    }
}
export default combineReducers({
    num
})
