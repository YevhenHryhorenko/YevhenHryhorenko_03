let userName,
    userSurname,
    userEmail,
    flagEmail,
    birthYear,
    age,
    currentYear,
    counter = 0;

currentYear = new Date();
userName = prompt('Enter your name:', '').trim();
userName = (userName[0].toUpperCase() + userName.slice(1).toLowerCase());
userSurname = prompt('Enter your surname:').trim();
userSurname = (userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase());
userEmail = prompt('Enter your email:').replaceAll(' ', '').toLocaleLowerCase().replaceAll().toLowerCase();

if (!userEmail.includes('@')) {
    flagEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if (userEmail.slice(0, 1) == '@') {
    flagEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
} else if (userEmail.slice(-1) == '@') {
    flagEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
}

if (flagEmail !== undefined) {
    userEmail = flagEmail;
}

do {
    if (counter > 0) {
        alert('Your date of birth is wrong, please, try again');
    }
    birthYear = parseInt(prompt('Enter your birth year:').replaceAll(' ', ''));
    counter++;
} while ((birthYear > currentYear.getFullYear()) || (birthYear < 1900))

age = currentYear.getFullYear() - birthYear;

document.write(`
    <ul>
        <li>Full name: ${userName} ${userSurname}</li>
        <li>Email: ${userEmail}</li>
        <li>Age: ${age}</li>
    </ul>
`);