import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from '@angular/fire/auth';
import {
  collection,
  collectionData,
  doc,
  Firestore,
  getDoc,
} from '@angular/fire/firestore';
import { Store } from '@ngrx/store';

import {
  getUserData,
  signInFailure,
  signInSuccess,
} from '../redux/actions/auth.actions';
import { UserCollection } from '../shared/models/auth.models';
import { BehaviorSubject, Subscribable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);
  private store: Store = inject(Store);
  userSubscription = this.auth.onAuthStateChanged(() => {
    this.getUserData();
  });

  signUp(userName: string, password: string) {
    createUserWithEmailAndPassword(this.auth, userName, password).then(() => {
      console.log('kek');
    });
  }
  async signIn(userName: string, password: string) {
    return signInWithEmailAndPassword(this.auth, userName, password);
  }

  // async getUser(userID: string) {
  //   const userCollection = collection(this.firestore, 'users');
  //   const user: UserCollection = collectionData(userCollection);
  //   const docRef = doc(this.firestore, 'users', userID);
  //   const dataSnap = await getDoc(docRef);
  //   return userData.data() as Promise<UserCollection>;
  // }

  async getUserData() {
    if (this.auth.currentUser === null) return;
    const userID = this.auth.currentUser.uid;
    const docRef = doc(this.firestore, 'users', userID);
    const dataSnap = await getDoc(docRef);
    const userData = dataSnap.data() as UserCollection;
    this.store.dispatch(getUserData({ userCollection: userData }));
    this.store.dispatch(signInSuccess());
  }

  signInFailure(error: Error) {
    console.log(error.message);
    this.store.dispatch(signInFailure());
  }

  logOut() {
    this.auth.signOut();
  }
}
