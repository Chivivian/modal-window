'use strict';
const subBtn = document.querySelector('.sub-btn');
const modal = document.querySelector('.modal');
const times = document.querySelector('.x');
const submit = document.getElementById('button');
const submitText = document.querySelector('.submit');

const hidden = function () {
  modal.classList.toggle('hidden');
};
subBtn.addEventListener('click', function () {
  hidden();
  submitText.classList.add('hidden');
});
times.addEventListener('click', hidden);

submit.addEventListener('click', function () {
  hidden();
  submitText.classList.toggle('hidden');
});
