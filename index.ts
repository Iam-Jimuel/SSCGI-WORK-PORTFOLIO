import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-darkmode-toggle',
  templateUrl: './darkmode-toggle.component.html',
  styleUrls: ['./darkmode-toggle.component.css']
})
export class DarkmodeToggleComponent {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
