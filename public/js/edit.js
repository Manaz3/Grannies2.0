const entriesContainer = document.querySelector('.js-entries-container');

// запрашиваем форму редактированиея
entriesContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('js-edit')) {
    event.preventDefault();
    const edt = event.target;
    const li = edt.closest('.js-entry');
    const { id } = li.dataset;
    const wrapper = li.querySelector('.form-wrapper');
    if (wrapper) {
      wrapper.remove();
    } else {
      const response = await fetch(`/api/entries/${id}`, {
        method: 'GET',
      });
      const { html } = await response.json();
      li.insertAdjacentHTML('beforeend', html);
    }
  }
});

// событие на изменение записи
entriesContainer.addEventListener('submit', async (event) => {
  if (event.target.classList.contains('js-form')) {
    event.preventDefault();
    const wrapper = document.querySelector('.form-wrapper');
    const form = event.target;
    const li = form.closest('.js-entry');
    const imageChild = li.querySelector('.image');
    const bodyChild = li.querySelector('.body');
    const { id } = li.dataset;
    const { image, body } = form;
    await fetch(`/api/entries/${id}`, {
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
