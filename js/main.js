document
  .querySelector('#project-details-summary')
  .addEventListener('click', projectDetailsClickHandler);

function projectDetailsClickHandler() {
  const projectDetailsElement = document.querySelector('#project-details');
  const summaryElement = document.querySelector('#project-details-summary');
  if (projectDetailsElement.hasAttribute('open'))
    summaryElement.textContent = 'Show projects';
  else summaryElement.textContent = 'Hide projects';
}
