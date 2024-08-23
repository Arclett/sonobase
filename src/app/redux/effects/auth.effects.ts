import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs';

import { FirebaseService } from '../../services/firebase.service';
import { getUserData, signIn, signInSuccess } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private firebase$ = inject(FirebaseService);
  private store = inject(Store);
  private router = inject(Router);
  signIn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signIn),
        switchMap((data) => this.firebase$.signIn(data.name, data.password)),
        switchMap((data) =>
          data.user.getIdToken().then((token) => {
            return {
              token: token,
              userID: data.user.uid,
            };
          })
        ),
        switchMap((data) => {
          this.store.dispatch(signInSuccess({ token: data.token }));
          return this.firebase$.getUser(data.userID);
        }),

        map((data) => {
          console.log(data);
          this.store.dispatch(getUserData({ userCollection: data }));
        }),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );
}
