import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TuiAccordion } from '@taiga-ui/kit';
import { Observable } from 'rxjs';

import { selectUserCollection } from '../../../redux/selectors/auth.selectors';
import { selectSideVisible } from '../../../redux/selectors/exam.selectors';
import { UserCollection } from '../../../shared/models/auth.models';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  providers: [AsyncPipe],
  imports: [CommonModule, TuiAccordion],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  isVisible: Observable<boolean> | undefined;
  userCollection: Observable<UserCollection | null> | undefined;
  private store: Store = inject(Store);
  auth = inject(Auth);
  ngOnInit(): void {
    this.isVisible = this.store.select(selectSideVisible);
    this.userCollection = this.store.select(selectUserCollection);
  }
}
