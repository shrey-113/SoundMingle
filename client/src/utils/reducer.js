import { reducerCases } from "./Constants";

export const initialState={

    token:null,
    userInfo:null,

}

const reducer =(state,action)=>{

    switch(action.type){
        case reducerCases.SET_TOKEN:{
            return{
                ...state,
                token:action.token,
            }
        }
        case reducerCases.SET_USER:{
            return {
                ...state,
                userInfo:action.userInfo,
            }
        }

        case reducerCases.LOG_OUT: {
            return {
                ...state,
                token: null,
                userInfo: null,
            }
        }

        default:
            return state; 
    }
}

export default reducer