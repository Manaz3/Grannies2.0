const entriesContainer = document.querySelector('.js-entries-container');

// событие на изменение записи
container.addEventListener('submit', async (event) => {
  if (event.target.classList.contains('js-form')) {
    event.preventDefault();
    const wrapper = document.querySelector('.form-wrapper');
    const form = event.target;

    const li = form.closest('.js-entry');
    const imageChild = li.querySelector('.image');
    const bodyChild = li.querySelector('.body');
    const { id } = li.dataset;
    const { image, body } = form;
    await fetch(`#######${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        image: image.value,
        body: body.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    imageChild.innerText = image.value;
    bodyChild.innerText = body.value;
    wrapper.remove();
  }
});
