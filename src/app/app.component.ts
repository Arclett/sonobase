import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';

import { SidebarComponent } from './components/exam/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private firebase$: FirebaseService = inject(FirebaseService);
  ngOnInit(): void {
    this.firebase$.getUserData();
  }
  title = 'sonobase';
}
