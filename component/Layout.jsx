const React = require('react');

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <title>Advices to my kids</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {/* навигация */}
        <header>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                На Главную
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">
                Авторизация
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
              Регистрация
              </a>
            </li>
          </ul>
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;