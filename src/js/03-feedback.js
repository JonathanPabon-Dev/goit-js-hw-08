import throttle from 'lodash.throttle';

const form = document
  .querySelector('.feedback-form')
  .addEventListener('submit', submitForm)
  .addEventListener('input', getFormData);

const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

const formObj = {
  email: '',
  message: '',

  getEmail() {
    return this.email;
  },
  getMessage() {
    return this.message;
  },
  setEmail(newEmail) {
    this.email = newEmail;
  },
  setMessage(newMessage) {
    this.message = newMessage;
  },
};

let formState = localStorage.getItem('feedback-form-state');
if (formState) {
  localStorage.setItem('feedback-form-state', JSON.stringify(formObj));
}

function getFormData() {
  const emailValue = emailInput.value;
  const messageValue = messageTextarea.value;

  console.log(`Email: ${emailValue}`);
  console.log(`Message: ${messageValue}`);
  formObj.setEmail(JSON.parse(formState).email);
  formObj.setMessage(JSON.parse(formState).message);
}

function submitForm() {
  console.log(formObj);
  clearForm();
}

function clearForm() {
  emailInput.value = '';
  messageTextarea.value = '';
}
