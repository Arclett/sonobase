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
  userCollection: UserCollection | null = null;
  private store$: Store = inject(Store);
  private asyncPipe$ = inject(AsyncPipe);
  ngOnInit(): void {
    this.isVisible = this.store$.select(selectSideVisible);
    this.userCollection = this.asyncPipe$.transform(
      this.store$.select(selectUserCollection)
    );
  }

  get patternsByZone() {
    if (this.userCollection === null) return [];
    return this.userCollection.patternByZone;
  }
}
