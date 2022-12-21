import { v4 } from 'uuid';

console.log('here is a random string: ' + v4());

function displayRandomString() {
    if (typeof document !== 'undefined') {
        const first = document.getElementById('first');
        first.innerHTML = v4();
    }
}

displayRandomString();