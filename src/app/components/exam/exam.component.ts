import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiLabel } from '@taiga-ui/core';
import { TuiSwitch } from '@taiga-ui/kit';
import { showSide } from '../../redux/actions/exam.actions';
import { selectVisible } from '../../redux/selectors/sidebar.selector';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-exam',
  standalone: true,
  providers: [AsyncPipe],
  imports: [SidebarComponent, TuiSwitch, TuiLabel, FormsModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamComponent implements OnInit {
  isVisible: boolean = true;
  constructor(private store: Store, private AsyncPipe: AsyncPipe) {}
  ngOnInit(): void {
    this.isVisible =
      this.AsyncPipe.transform(this.store.select(selectVisible)) || false;
  }

  onChange() {
    this.store.dispatch(showSide({ visible: this.isVisible }));
  }
}
