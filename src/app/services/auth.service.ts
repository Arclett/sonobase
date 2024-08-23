import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    userName: string | undefined;

    authorized: boolean = false;

    constructor() {}
}
