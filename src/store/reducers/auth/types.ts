export interface AuthState{
    isAuth: boolean;
}
export enum AuthActionType{
    SET_AUTH = 'SET_AUTH'
}
export interface setAuthAction{
    payload: boolean;
    type: AuthActionType.SET_AUTH;
}
export type AuthAction = setAuthAction;