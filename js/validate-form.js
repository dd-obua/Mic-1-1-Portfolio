const emailInput = document.querySelector('.email');
const submitBtn = document.querySelector('.submit-form');
const errorMsg = document.querySelector('.email-error');

submitBtn.addEventListener('click', function (event) {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMsg.style.display = 'block';
  }
});
