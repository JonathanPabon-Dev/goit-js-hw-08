import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = document.querySelector('input[name="email"]');
  const messageTextarea = document.querySelector('textarea[name="message"]');

  let formData = {
    email: '',
    message: '',
  };

  let formState = localStorage.getItem('feedback-form-state');
  if (formState) {
    fillForm(JSON.parse(formState));
  }

  function fillForm(dataForm) {
    emailInput.value = dataForm.email;
    messageTextarea.value = dataForm.message;
  }

  const getFormData = throttle(function () {
    formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500);

  form.addEventListener('input', getFormData);

  form.addEventListener('submit', e => {
    formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    if (formData.email && formData.message) {
      submitForm(e);
    } else {
      window.alert('Fill all fields.');
    }
  });

  function submitForm(e) {
    e.preventDefault();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
    clearForm();
  }

  function clearForm() {
    form.reset();
    emailInput.focus();
    formData = {
      email: '',
      message: '',
    };
  }
});
