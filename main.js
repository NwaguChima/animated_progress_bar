const progressBar = document.querySelector('.progressbar');
let progress = 0;

function enableProgressBar() {
  progressBar.setAttribute('role', 'progressbar');
  progressBar.setAttribute('aria-valuenow', progress);
  progressBar.setAttribute('aria-valuemin', 'polite');
}

enableProgressBar();

const testingBtn = document.querySelector('.testing-ground');

testingBtn.addEventListener('click', (e) => {
  if (!e.target.closest('button')) return;

  progress = e.target.dataset.progress;
  updateProgress(progress);
});

function updateProgress(progress) {
  progressBar.setAttribute('aria-valuenow', progress);
  progressBar.style.setProperty('--progress', progress + '%');
}

function simulateUpload() {
  // prevent announcing every update interval
  progress.setAttribute('aria-busy', 'true');
  let progress = 0;
  updateProgress(progress);

  intervalTimer = setInterval(() => {
    progress += 5;
    updateProgress(progress);
    if (progress === 100) progressBar.setAttribute('aria-busy', 'false');
    clearInterval(intervalTimer);
  }, 500);
}
