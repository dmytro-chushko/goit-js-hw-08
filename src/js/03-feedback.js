const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const storageFeedbackValues = () => localStorage.getItem('feedback');
const feedbackValues = storageFeedbackValues() ? JSON.parse(storageFeedbackValues()) : {};

function takeFormValues(target) {
  switch (target.name) {
    case 'email':
      feedbackValues.email = target.value;
      break;
    
    case 'message':
      feedbackValues.message = target.value;
  }
  localStorage.setItem('feedback', JSON.stringify(feedbackValues));
};

function resetForm(e) {
  e.preventDefault();
  console.log(JSON.parse(storageFeedbackValues()));
  form.reset();
  localStorage.removeItem('feedback');
}

if (storageFeedbackValues()) {
  form.querySelector('input').value = JSON.parse(storageFeedbackValues()).email;
  form.querySelector('textarea').value = JSON.parse(storageFeedbackValues()).message;
}

form.addEventListener('input', throttle(({target}) => takeFormValues(target), 500));
form.addEventListener('submit', (e) => resetForm(e));