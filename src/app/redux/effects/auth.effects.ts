import { inject, Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, tap } from 'rxjs';

import { FirebaseService } from '../../services/firebase.service';
import { signOut, signIn, signInFailure } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private firebase$ = inject(FirebaseService);
  signIn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signIn),
        map((data) =>
          this.firebase$
            .signIn(data.name, data.password)
            .then(() => this.firebase$.getUserData())
            .catch((error: Error) => {
              this.firebase$.signInFailure(error);
            })
        )
      ),
    { dispatch: false }
  );

  signInFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInFailure),
        tap((data) => {
          console.log(data);
        })
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signOut),
        tap(() => this.firebase$.logOut())
      ),
    { dispatch: false }
  );
}
