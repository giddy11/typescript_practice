console.log("Hello");
interface someValue {
    name: string;
    id: number;
}

let someObj: someValue = {
    name: 'random',
    id: 123
};

console.log(someObj);

// Union types helps to set multiple types
let tax: number | string = 10;
tax = 100;
tax = '50';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'pending';

let notSure: any = 4;
notSure = 'maybe 4';
notSure = false;

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];
let foundBook: string | undefined;

for (let book of books){
    if (book === '1984'){
        foundBook = book;
        foundBook.length;
        break;
    }
}

console.log(foundBook?.length);

let prices: number[] = [3,4,5];

let nums = ['dhhd', 'kdkd', 9, null, undefined, false];