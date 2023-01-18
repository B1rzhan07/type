import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import axios from 'axios';
 
import { AuthActionType,  setAuthAction, setErrorAction, setIsLoadingAction, setUserAction } from "./types";
export const AuthActionCreators = {
    setAuth: (payload: boolean): setAuthAction => ({type: AuthActionType.SET_AUTH, payload}),
    setUser: (payload: IUser): setUserAction => ({type: AuthActionType.SET_USER, payload}),
    setIsLoading: (payload: boolean): setIsLoadingAction => ({type: AuthActionType.SET_IS_LOADING, payload}),
    setError: (payload: string): setErrorAction => ({type: AuthActionType.SET_ERROR, payload}),
    login: ( name: string, password: string  )  => async (dispatch: AppDispatch) => {

        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const mockUser = await axios.get("./users.json")
            console.log(mockUser)
        } catch (error) {
            dispatch(AuthActionCreators.setError("Error is occured bro"))
            
        }
        
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            
        } catch (error) {
            
        }
    }

}