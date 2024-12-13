'use strict';

const formInputs = document.querySelectorAll('input');

const getSeparatedStr = (str) => {
  const upperCaseLetters = [];

  for (const char of str) {
    if (char === char.toUpperCase()) {
      upperCaseLetters.push(char);
    }
  }

  if (!upperCaseLetters.length) {
    return str;
  }

  let newStr = str;

  upperCaseLetters.forEach((letter) => {
    newStr = newStr.split(letter).join(` ${letter}`);
  });

  return newStr;
};

formInputs.forEach((input) => {
  const nameOfInput = getSeparatedStr(input.name);
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('htmlFor', input.name);
  label.textContent = nameOfInput;

  input.parentElement?.append(label);

  input.placeholder = nameOfInput[0].toUpperCase() + nameOfInput.slice(1);
});
