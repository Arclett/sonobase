import { inject, Injectable } from "@angular/core";
import {
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "@angular/fire/auth";
import {
    collection,
    collectionData,
    doc,
    Firestore,
    getDoc,
} from "@angular/fire/firestore";

import { UserCollection } from "../shared/models/auth.models";

@Injectable({
    providedIn: "root",
})
export class FirebaseService {
    private auth: Auth = inject(Auth);
    private firestore: Firestore = inject(Firestore);
    signUp(userName: string, password: string) {
        createUserWithEmailAndPassword(this.auth, userName, password).then(() => {
            console.log("kek");
        });
    }
    async signIn(userName: string, password: string) {
        return signInWithEmailAndPassword(this.auth, userName, password);
    }

    async getUser(userID: string) {
        const userCollection = collection(this.firestore, "users");
        const user: UserCollection = collectionData(userCollection);
        const docRef = doc(this.firestore, "users", userID);
        const userData = await getDoc(docRef);
        return userData.data() as Promise<UserCollection>;
    }
}
