export interface AuthState {
    authorized: boolean;
    user: UserData | null;
    authToken: string | null;
    userCollection: UserCollection | null;
}

export interface UserData {
    userName: string;
    userID: string;
}

export interface UserCollection {
    userName: string;
    patternByZone: Pattern[];
    patternsByOrgans: Pattern[];
    patternsCommon: Pattern[];
}

export interface Pattern {
    title: string;
    body: string;
}

export enum AuthActions {
    SIGN_IN = "SIGN_IN",
    SIGN_IN_SUCCESS = "SIGN_IN_SUCCES",
    SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
    GET_USER_DATA = "GET_USER_DATA",
}

export const isUserCollection = function (
    item: UserCollection | null
): item is UserCollection {
    return item === null;
};
