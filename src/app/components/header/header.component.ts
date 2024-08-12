import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { showSide } from '../../redux/actions/header.actions';
import { selectVisible } from '../../redux/selectors/sidebar.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  providers: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isVisible$: Subscription | undefined;
  isVisible: boolean | null = true;
  constructor(private store: Store, private AsyncPipe: AsyncPipe) {}
  ngOnInit(): void {
    this.isVisible = this.AsyncPipe.transform(this.store.select(selectVisible));
  }

  onClick() {
    this.store.dispatch(showSide({ visible: !this.isVisible }));
  }
}
