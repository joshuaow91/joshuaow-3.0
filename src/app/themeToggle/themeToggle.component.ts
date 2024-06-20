import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-toggle',
  template: `
    <label
      for="toogleDark2"
      aria-label="toggle light or dark mode for project preview"
      class="flex items-center cursor-pointer"
    >
      <div class="relative">
        <input
          id="toogleDark2"
          type="checkbox"
          class="sr-only"
          (click)="toggleTheme()"
          [checked]="themeService.isDarkMode()"
        />
        <div class="block bg-blue-400 w-14 h-8 rounded-full"></div>
        <div
          class="absolute left-1 top-1 bg-zinc-50 w-6 h-6 rounded-full transition-transform duration-300 ease-in-out"
          [ngClass]="{
            'transform translate-x-full': themeService.isDarkMode()
          }"
        ></div>
      </div>
    </label>
  `,
})
export class ToggleComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | null;
    if (storedTheme === 'light' || storedTheme === 'dark') {
      this.themeService.update(storedTheme);
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.themeService.update('dark');
    } else {
      this.themeService.update('light');
    }
  }

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
