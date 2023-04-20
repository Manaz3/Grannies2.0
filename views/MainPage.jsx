const React = require('react');
const Layout = require('./Layout');

function MainPage({ entries, user }) {
  const content =
    entries.length > 0 ? (
      entries.map((entry) => (
        <div className="entry js-entry" key={entry.id} data-id={entry.id}>
          <img className="image" src={entry.image} width={400} height={300} />
          <span className="entry-title">{entry.body}</span>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" className="js-edit">
                Редактирование
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="js-delete">
                Удаление
              </a>
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
