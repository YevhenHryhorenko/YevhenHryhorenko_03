let userName,
    userSurname,
    userEmail,
    flagEmail,
    birthYear,
    age,
    currentYear,
    counter = 0;

currentYear = new Date().getFullYear();
userName = prompt('Enter your name:').trim();
userSurname = prompt('Enter your surname:').trim();
userEmail = prompt('Enter your email:').trim().toLocaleLowerCase();

if (!userEmail.includes('@')) {
    flagEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
    userEmail = flagEmail;
} else if (userEmail.slice(0, 1) == '@') {
    flagEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`
    userEmail = flagEmail;;
} else if (userEmail.slice(-1) == '@') {
    flagEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
    userEmail = flagEmail;
}

do {
    if (counter > 0) {
        alert('Your date of birth is wrong, please, try again');
    }
    birthYear = prompt('Enter your birth year:').trim();
    +birthYear;
    counter++;
} while (birthYear > new Date().getFullYear() || birthYear < 1900)

age = currentYear - birthYear;

document.write(`<p>Full name: ${userSurname} ${userName}</p>
<p>Email: ${userEmail}</p>
<p>Age: ${age}</p>`);