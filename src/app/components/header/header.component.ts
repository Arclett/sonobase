import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  INJECTOR,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiButton, TuiDialogService, TuiLabel } from '@taiga-ui/core';
import { TuiSwitch, TuiTabs } from '@taiga-ui/kit';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';

import { AuthComponent } from './auth/auth.component';

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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  authorized = false;
  private readonly injector = inject(INJECTOR);
  private readonly dialogs = inject(TuiDialogService);
  private readonly dialog = this.dialogs.open(
    new PolymorpheusComponent(AuthComponent, this.injector),
    {
      dismissible: true,
    }
  );

  protected showDialog(): void {
    this.dialog.subscribe();
  }
}
