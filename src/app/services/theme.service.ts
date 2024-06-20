import { Injectable, RendererFactory2, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme: BehaviorSubject<'light' | 'dark'>;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    const storedTheme =
      (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    this.colorTheme = new BehaviorSubject<'light' | 'dark'>(storedTheme);
    this.update(storedTheme);
  }

  enableDark() {
    this.renderer.addClass(this.document.body, 'dark');
    this.colorTheme.next('dark');
  }

  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark');
    this.colorTheme.next('light');
  }

  update(theme: 'light' | 'dark') {
    theme === 'dark' ? this.enableDark() : this.enableLight();
    localStorage.setItem('theme', theme);
  }

  isDarkMode() {
    return this.colorTheme.value === 'dark';
  }

  getThemeUpdates() {
    return this.colorTheme.asObservable();
  }
}
