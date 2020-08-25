const name = 'pallavi';
let title = 'software Engineer';

title = 'senior software Engineer';


const dateOfBirth = '27/03/1992';

let age = 27;

// Exmple 2

let statuses = [
    { code: 'OK', response: 'Request successful' },
    { code: 'FAILED', response: 'There was an error with your request' },
    { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
        message = statuses[i].response;
    }
}