import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  active_theme: string = "light"
  theme = {
    'light': {
      '--table_header': '#007bff',
      '--body_bg': '#ffffff',
      '--headings_color': '#000',
      '--table_body': '#fbfbfb',
      '--table_font_color': '#000',
    },
    'dark': {
      '--table_header': '#007bff',
      '--body_bg': '#000',
      '--headings_color': '#fff',
      '--table_body': '#343a40',
      '--table_font_color': '#fff',
    }
  }
  constructor() { }

  changeTheme(newTheme: string = "light"): void {
    this.active_theme = newTheme;
    let theming_keys =this.theme[this.active_theme]

    for (let key in theming_keys) {
      document.documentElement.style
        .setProperty(
          key, this.theme[this.active_theme][key]
        );
    }
  }
}
