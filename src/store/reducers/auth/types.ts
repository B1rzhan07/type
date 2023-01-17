import { IUser } from "../../../models/IUser";

export interface AuthState{
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;

}
export enum AuthActionType{
    SET_AUTH = 'SET_AUTH',
    SET_USER= 'SET_USER',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',

}
export interface setAuthAction{
    payload: boolean;
    type: AuthActionType.SET_AUTH;
}

export interface setUserAction{
    payload: IUser;
    type: AuthActionType.SET_USER;
}

export interface setIsLoadingAction{
    payload: boolean;
    type: AuthActionType.SET_IS_LOADING;
}

export interface setErrorAction{
    payload: string;
    type: AuthActionType.SET_ERROR;
}


export type AuthAction = setAuthAction | setUserAction | setIsLoadingAction | setErrorAction;