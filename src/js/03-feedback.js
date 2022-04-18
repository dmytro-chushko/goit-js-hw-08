const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const feedbackValues = {};
const storageFeedbackValues = localStorage.getItem('feedback');

function takeFormValues(target) {
  if (target.name === 'email') {
    feedbackValues.email = target.value;
  }
  if (target.name === 'message') {
    feedbackValues.massage = target.value;
  }
  localStorage.setItem('feedback', JSON.stringify(feedbackValues));
};

function resetForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback')));
  form.reset();
  localStorage.removeItem('feedback');
}

if (storageFeedbackValues) {
  form.querySelector('input').value = JSON.parse(storageFeedbackValues).email;
  form.querySelector('textarea').value = JSON.parse(storageFeedbackValues).message;
}

form.addEventListener('input', throttle(({target}) => takeFormValues(target), 500));
form.addEventListener('submit', (e) => resetForm(e));