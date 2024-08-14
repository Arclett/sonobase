import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiButton, TuiLabel } from '@taiga-ui/core';
import { TuiSwitch, TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-header',
  standalone: true,
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
export class HeaderComponent {}
