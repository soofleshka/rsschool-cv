document
  .querySelector('#project-details')
  .addEventListener('click', projectDetailsClickHandler);

function projectDetailsClickHandler(e) {
  const projectDetailsElement = document.querySelector('#project-details');
  const summaryElement = projectDetailsElement.querySelector('summary');
  if (projectDetailsElement.hasAttribute('open'))
    summaryElement.textContent = 'Show projects';
  else summaryElement.textContent = 'Hide projects';
}
