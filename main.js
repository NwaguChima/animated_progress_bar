const progressBar = document.querySelector('.progressbar');
let progress = 0;

function enableProgressBar() {
  progressBar.setAttribute('role', 'progressbar');
  progressBar.setAttribute('aria-valuenow', progress);
  progressBar.setAttribute('aria-valuemin', 'polite');
}

enableProgressBar();

const testingBtn = document.querySelector('.testing-ground');
let interval = null;

function simulateProgress(newProgressValue) {
  clearInterval(interval);
  if (newProgressValue === 'fake-upload') {
    simulateUpload();
  } else {
    updateProgress(newProgressValue);
  }
}

testingBtn.addEventListener('click', (e) => {
  if (!e.target.closest('button')) return;

  progress = e.target.dataset.progress;
  simulateProgress(progress);
});

function updateProgress(progress) {
  progressBar.setAttribute('aria-valuenow', progress);
  progressBar.style.setProperty('--progress', progress + '%');
}

function simulateUpload() {
  // prevent announcing every update interval
  progressBar.setAttribute('aria-busy', 'true');
  let progress = 0;
  updateProgress(progress);

  let intervalTimer = setInterval(() => {
    progress += 5;
    updateProgress(progress);
    if (progress === 100) {
      progressBar.setAttribute('aria-busy', 'false');
      clearInterval(intervalTimer);
    }
  }, 500);
}
