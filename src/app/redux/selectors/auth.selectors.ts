import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthState } from "../../shared/models/auth.models";
import { authFeatureKey } from "../reducers/auth.reducer";

export const selectAuthFeature = createFeatureSelector<AuthState>(authFeatureKey);

export const selectUserCollection = createSelector(
    selectAuthFeature,
    (state) => state.userCollection
);
