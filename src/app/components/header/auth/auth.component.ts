import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiButton, TuiGroup, type TuiDialogContext } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import { POLYMORPHEUS_CONTEXT } from '@taiga-ui/polymorpheus';

import { signOut, signIn } from '../../../redux/actions/auth.actions';
import { FirebaseService } from '../../../services/firebase.service';
import { selectAuthorized } from '../../../redux/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { TuiSegmented } from '@taiga-ui/kit';

@Component({
  selector: 'app-auth',
  standalone: true,
  providers: [AsyncPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButton,
    TuiSegmented,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  private readonly context = inject<TuiDialogContext>(POLYMORPHEUS_CONTEXT);
  isAuthorized: Observable<boolean> | undefined;
  protected readonly buttons = ['Sign In', 'Sign Up'];
  protected active = 0;
  protected readonly signInForm = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    userName: new FormControl(''),
  });
  constructor(private store: Store) {}

  ngOnInit() {
    this.isAuthorized = this.store.select(selectAuthorized) || false;
  }

  signIn() {
    const login = this.signInForm.controls.mail.value || '';
    const pass = this.signInForm.controls.password.value || '';
    this.store.dispatch(signIn({ name: login, password: pass }));
    this.context.completeWith();
  }

  signOut() {
    this.store.dispatch(signOut());
  }
}
