const progressBar = document.querySelector('.progressbar');

function enableProgressBar() {
  progressBar.setAttribute('role', 'progressbar');
  progressBar.setAttribute('aria-valuenow', 0);
  progressBar.setAttribute('aria-valuemin', 'polite');
}

enableProgressBar();
