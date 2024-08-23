import { createReducer, on } from "@ngrx/store";

import { AuthState } from "../../shared/models/auth.models";
import { getUserData, signInSuccess } from "../actions/auth.actions";

export const authFeatureKey = "auth";

export const initialState: AuthState = {
    authorized: false,
    user: null,
    authToken: null,
    userCollection: null,
};

export const authReducer = createReducer(
    initialState,
    on(signInSuccess, (state, { token }) => ({
        ...state,
        authorized: true,
        authToken: token,
    })),
    on(getUserData, (state, { userCollection }) => ({
        ...state,
        userCollection,
    }))
);
