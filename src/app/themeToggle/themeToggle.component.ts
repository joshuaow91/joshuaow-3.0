import { Component } from '@angular/core';
import { ThemeService } from '../services/themeService';
@Component({
  selector: 'app-toggle',
  template: `
    <!-- <button (click)="toggleTheme()">
      {{ themeService.isDarkMode() ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
    </button> -->

    <label for="toogleDark2" aria-label="toggle light or dark mode for project preview" class="flex items-center cursor-pointer">
        <div class="relative">
            <input id="toogleDark2" type="checkbox" class="sr-only" (click)="toggleTheme()" />
            <div class="block bg-blue-400 w-14 h-8 rounded-full"></div>
            <div class="absolute left-1 top-1 bg-zinc-50 w-6 h-6 rounded-full transition-transform duration-300 ease-in-out" [ngClass]="{'transform translate-x-full': themeService.isDarkMode()}"></div>
        </div>
    </label>
  `,
})
export class ToggleComponent {

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    if (this.themeService.isDarkMode()) {
      this.themeService.update('light');
      localStorage.setItem('theme', 'light');
    } else {
      this.themeService.update('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}
