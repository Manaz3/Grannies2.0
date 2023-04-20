const React = require('react');
const Layout = require('../component/Layout');

function MainPage({ entries = 0, user }) {
  const content =
    entries.length > 0 ? (
      entries.map((entry) => (
        <div key={entry.id} data-id={entry.id} className="entry js-entry">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Детали</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Редактирование</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Удаление</a>
            </li>
          </ol>
        </div>
      ))
    ) : (
      <div>Тут могла бы быть ваша реклама, но ее нет 😢</div>
    );

  return (
    <Layout>
      <main className="js-entries-container">{content}</main>
      <script src="/js/main.js" defer />
    </Layout>
  );
}

module.exports = MainPage;