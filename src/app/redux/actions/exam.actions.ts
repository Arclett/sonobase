import { createAction, props } from "@ngrx/store";

import { ExamActions } from "../../shared/models/exam.model";

export const showSide = createAction(
    ExamActions.SHOW_SIDE,
    props<{ visible: boolean }>()
);

export const selectMode = createAction(
    ExamActions.SELECT_MODE,
    props<{ index: number }>()
);
