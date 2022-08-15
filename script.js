const agreementCheckBox = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');

function validateFormSubmit() {
  if (agreementCheckBox.checked === true) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}
