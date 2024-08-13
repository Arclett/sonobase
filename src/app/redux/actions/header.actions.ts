import { createAction, props } from "@ngrx/store";

import { HeaderActions } from "../../shared/models/header.model";

export const changeTab = createAction(
    HeaderActions.CHANGE_TAB,
    props<{ tabIndex: number }>()
);
