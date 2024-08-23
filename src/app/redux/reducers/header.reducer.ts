import { createReducer, on } from "@ngrx/store";

import { HeaderState } from "../../shared/models/header.model";
import { showModal } from "../actions/header.actions";

export const headerFeatureKey = "header";

export const initialState: HeaderState = {
    showModal: false,
};

export const headerReducer = createReducer(
    initialState,
    on(showModal, (state) => ({ ...state, showModal: !state.showModal }))
);
