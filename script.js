// завдання 1

let first = +prompt('first?', '');
let second = +prompt('second?', '');

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function sumSliceArray(arr, first, second) {
    if (isNaN(first, second)) {
        throw new Error('input type should be a number');
    };
    if (first > arr.length || second >= arr.length) {
        throw new Error('input number is bigger than arr lenght');
    };
    return arr[first] + arr[second];
};

try {
    console.log(sumSliceArray(arr, first, second));
} catch(error) {
    console.log(error.message);
};

// завдання 2

function checkAge() {
    try {
        let name = prompt('your name');
        let age = +prompt('enter your age');
        let status = prompt('enter your status'); // user, moderator, admin
    
        if (name === null || name === '' || status === null || status === '' || age === null || age === '') {
            throw new Error ('The field is empty! Please enter your age.');
        };

        if (age < 18 || age > 70) {
          throw new RangeError('your age is not enough for watching this');
        };

        if (isNaN(age)) {
          throw new EvalError('Please enter your age');
        };

        if (status !== 'user' || status !== 'moderator' || status !== 'admin'){
          throw new EvalError('Please enter your status.');
        };
    } catch(error) {
        alert(`${error.name} : ${error.message}`);
    };
};

checkAge();

// завдання 3

let width = prompt('width?', '');
let height = prompt('height?', '');

function calcRectangleArea(width, height) {

    if (width === null || width === '' || height === null || height === '') {
        throw new Error('Please enter width and height');
    };

    if (isNaN(width) || isNaN(height)) {
        throw new Error('Input type should be a number');
    };

    if (width <= 0 || height <= 0) {
        throw new Error('Input type should be a positive number');
    };

    return width * height;
};

try{
    alert('Площа прямокутника: ' + calcRectangleArea(width, height));
}catch(error){
    alert(`${error.name} : ${error.message}`);
};

// завдання 4

class MonthException{
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    };
};

let month = prompt('enter month');

function showMonthName(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month < 1 || month > 12 || isNaN(month)) {
        throw new MonthException('Incorrect month number');
    };
    return months[month - 1];
};

try{
    console.log(showMonthName(month));
}catch(e){
    console.log(e);
};

// завдання 5

let id = prompt('enter your id');

function showUser(id) {
    if (id < 0 || isNaN(id)) {
        throw new Error('ID must not be negative ' + id);
    };
    return {id: id};
};

try {
    console.log(showUser(id));
}catch(e){
    console.log(e);
};

function showUsers(ids) {
    let validUsers = [];

    for (const id of ids) {
        try {
            let user = showUser(id);
            validUsers.push(user);
        }catch(e){
            console.log(e);
        };
    };

    console.log(validUsers);
    return validUsers;
};

showUsers([7, -12, 44, 22]);