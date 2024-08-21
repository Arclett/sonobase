import { createReducer, on } from "@ngrx/store";

import { ExamState } from "../../shared/models/exam.model";
import { selectMode, showSide } from "../actions/exam.actions";

export const examFeatureKey = "exam";

export const initialState: ExamState = {
    sideVisible: true,
    modeIndex: 0,
};

export const examReducer = createReducer(
    initialState,
    on(showSide, (state) => ({ ...state, sideVisible: !state.sideVisible })),
    on(selectMode, (state, { index: number }) => ({
        ...state,
        modeIndex: number,
    }))
);
