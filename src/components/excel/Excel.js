// import {$} from '../../core/dom';
// eslint-disable-next-line require-jsdoc
export class Excel {
  // eslint-disable-next-line require-jsdoc
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  // eslint-disable-next-line require-jsdoc
  getRoot() {
    // const $root = $.create('div', 'excel');
    const $root = document.createElement('div');
    $root.classList.add('excel');
    console.log(this.components);

    this.components.forEach((Component) => {
      // const $el = $.create('div', Component.className);
      const $el = document.createElement('div');
      $el.classList.add(Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHtml();
      $root.append($el);
      // $root.insertAdjacentHTML('beforeend', component.toHtml());
      console.log(component.toHtml());
    });
    return $root;
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    console.log(this.$el);
    // this.$el.insertAdjacentHTML('afterbegin', `<h1>TEST</h1>`);
    this.$el.append(this.getRoot());
  }
}
