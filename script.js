const inputField = document.getElementById('text-input');
const palindromeCheckButton = document.getElementById('check-btn');
const outputContainer = document.getElementById('result');

const isPalindrome = (text) => {
  const initialText = text;

  if (text.trim() === '') { 
    alert("Please input a value");
    return;
  }

  outputContainer.innerHTML = ''; 

  const cleanedString = text.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  const isPalin = cleanedString === cleanedString.split('').reverse().join('');
  
  let message; 
  if (isPalin) {
    message = `${initialText} is a palindrome`;
  } else {
    message = `${initialText} is not a palindrome`;
  }

  const messageElement = document.createElement('p');
  messageElement.className = 'user-input';
  messageElement.innerHTML = message;
  outputContainer.appendChild(messageElement);

  outputContainer.classList.remove('hidden');
};

palindromeCheckButton.addEventListener('click', () => {
  isPalindrome(inputField.value);
  inputField.value = '';
});
