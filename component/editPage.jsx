const React = require('react');
const Layout = require('../component/Layout');

function Edit({ entries, user }) {
  return (
    <Layout>
      <h3>Измените ваше послание</h3>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Заголовок
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Заголовок"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Картинка
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Тут будет ссылка на картинку (или нет)"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Сообщение вашим любимым подписчикам
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Какой-то текст внутри"
        ></textarea>
        <button type="submit" className="btn btn-secondary">
          Поделиться
        </button>
      </div>
    </Layout>
  );
}

module.exports = Edit;