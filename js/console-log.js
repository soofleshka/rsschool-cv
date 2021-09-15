function log(title, description) {
  console.log(title);
  if (description) console.log(description);
  console.log('');
}

log('вёрстка валидная +10');

log(
  'вёрстка семантическая +20',
  'header, nav, main, section, details, mark, time, h1, h2, h6'
);

log('для оформления СV используются css-стили +10');

log(
  'контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10'
);

log(
  'вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10'
);

log(
  'есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10'
);

log(
  'на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10'
);

log(
  'контакты для связи и перечень навыков оформлены в виде списка ul > li +10'
);

log(
  'CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10',
  'contacts, about-me, skills, education, languages'
);

log(
  'CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10'
);

log(
  'CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10'
);

log('CV выполнено на английском языке +10');

log(
  'выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10'
);

log(
  'дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10'
);

log(
  'есть видеорезюме автора CV на английском языке. 12/10 (0/10)',
  'https://youtu.be/dQw4w9WgXcQ'
);

log('Итого 150/160');
