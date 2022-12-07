const App = {
  template: `
    <app-header></app-header>
    <app-nav></app-nav>
    <app-view></app-view>
  `,
};
const AppHeader = {
  template: `
    <header>
      <h1>header</h1>
    </header>
  `,
};
const AppNav = {
  template: `
  <nav>
    <h2>nav</h2>
    <ul>
      <li><a href="#">메뉴1</a></li>
      <li><a href="#">메뉴2</a></li>
      <li><a href="#">메뉴3</a></li>
      <li><a href="#">메뉴4</a></li>
    </ul>
  </nav>`,
};
const AppView = {
  template: `
    <main>
      <section>
        <book-component></book-component>
        <book-component></book-component>
        <book-component></book-component>
        <book-component></book-component>
      </section>
    </main>`,
};
const BookComponent = {
  template: `
    <article class="book">
      <div class="book__subtitle">제목</div>
      <div class="book__title">HTML 강좌</div>
    </article>`,
};
const app = Vue.createApp(App);
app.component('BookComponent', BookComponent);
app.component('AppView', AppView);
app.component('AppNav', AppNav);
app.component('AppHeader', AppHeader);
app.mount('#app');
