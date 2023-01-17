import { AuthAction, AuthActionType, AuthState } from "./types";
import { IUser } from '../../../models/IUser';

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: "",
}

export default function authReducer(state=initialState, action:AuthAction) : AuthState {
    switch(action.type){
        case AuthActionType.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionType.SET_USER:
            return {...state, user: action.payload}
        case AuthActionType.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case AuthActionType.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        default:
            return state
        
        
    }

}