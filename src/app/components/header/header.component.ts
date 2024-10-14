import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  INJECTOR,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiButton, TuiDialogService, TuiLabel } from '@taiga-ui/core';
import { TuiSwitch, TuiTabs } from '@taiga-ui/kit';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';

import { AuthComponent } from './auth/auth.component';
import { Store } from '@ngrx/store';
import {
  selectAuthorized,
  selectUserCollection,
} from '../../redux/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { UserCollection } from '../../shared/models/auth.models';

@Component({
  selector: 'app-header',
  standalone: true,
  providers: [AsyncPipe],
  imports: [
    TuiButton,
    TuiTabs,
    TuiSwitch,
    TuiLabel,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private store: Store = inject(Store);
  private async: AsyncPipe = inject(AsyncPipe);
  userCollection: Observable<UserCollection | null> | undefined;
  isAuthorizedObs: Observable<boolean> | undefined;
  _isAuthorized = false;
  private readonly injector = inject(INJECTOR);
  private readonly dialogs = inject(TuiDialogService);
  private readonly dialog = this.dialogs.open(
    new PolymorpheusComponent(AuthComponent, this.injector),
    {
      data: this.isAuthorized,
      dismissible: true,
    }
  );

  ngOnInit() {
    this.userCollection = this.store.select(selectUserCollection);
    this.isAuthorizedObs = this.store.select(selectAuthorized);
    this._isAuthorized = this.async.transform(this.isAuthorizedObs) || false;
  }

  protected showDialog(): void {
    this.dialog.subscribe();
  }

  get isAuthorized() {
    return this._isAuthorized;
  }
}
