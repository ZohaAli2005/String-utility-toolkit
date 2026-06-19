function upperCase() {
    const input = document.querySelector('textarea').value;
    const output = input.toUpperCase();
    document.getElementById('output').textContent = output;
}

function lowerCase() {
    const input = document.querySelector('textarea').value;
    const output = input.toLowerCase();
    document.getElementById('output').textContent = output;
}

function reverseString() {
    const input = document.querySelector('textarea').value;
    const output = input.split('').reverse().join('');
    document.getElementById('output').textContent = output;
}

function capitalizeWords() {
    const input = document.querySelector('textarea').value;
    const output = input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById('output').textContent = output;
}