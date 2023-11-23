/* eslint-disable require-jsdoc */
import {ExcelComponent} from '../../core/ExcelComponent';

// eslint-disable-next-line require-jsdoc
export class Formula extends ExcelComponent {
  static className = 'excel__formula';
  toHtml() {
    return `
          <div class="info">fx</div>
          <div class="input" contenteditable spellcheck="false"></div>
    `;
  }
}
