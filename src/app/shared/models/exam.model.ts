export enum ExamActions {
    SHOW_SIDE = "SHOW_SIDE",
    SELECT_MODE = "SELECT_MODE",
}

export enum ExamModes {
    PATTERN = "PATTERN",
    TABLE = "TABLE",
    CONCLUSION = "CONCLUSION",
}

export interface ExamState {
    sideVisible: boolean;
    modeIndex: number;
}
