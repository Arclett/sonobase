import { createAction, props } from "@ngrx/store";

import { AuthActions, UserCollection } from "../../shared/models/auth.models";

export const signIn = createAction(
    AuthActions.SIGN_IN,
    props<{ name: string; password: string }>()
);
export const signInSuccess = createAction(
    AuthActions.SIGN_IN_SUCCESS,
    props<{ token: string }>()
);
export const getUserData = createAction(
    AuthActions.GET_USER_DATA,
    props<{ userCollection: UserCollection }>()
);
