// берем общий контейнер для делегирования
const entriesContainer = document.querySelector('.js-entries-container');

// запрос на удаление формы
entriesContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('js-delete')) {
    const btn = event.target;
    //  понять, что удалять из data-id родителя ()
    const adviceDiv = btn.closest('.js-entry');
    const { id } = adviceDiv.dataset;

    // сделать запрос на удаление
    const response = await fetch(`######${id}`, {
      method: 'DELETE',
    });
    const json = await response.json();
    adviceDiv.remove();
  }
});
