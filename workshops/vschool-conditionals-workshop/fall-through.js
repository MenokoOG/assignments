// each case represents a potential match
// the 'break' statement prevents "fall-through"


// by default, after the first time a case is matched, the program will execute the corresponding block of code and then continue to execute the rest of the cases and their blocks, even if those conditions aren't met - this is called fall-through

// copy paste the code
// first show with just let fruit;
// then show 'apple' and then 'cherry'

// If we add in the breaks for each case, that will make sure we exit the switch statement after a match is found.

// example without 'break'
let fruit = 'cherry';

switch (fruit) {
    case 'apple':
        console.log('This is an apple.');
    case 'banana':
        console.log('This is a banana.');
    case 'cherry':
        console.log('This is a cherry.');
    default:
        console.log('Unknown fruit.');
}

// this will output all the console logs - not what we want
// change to cherry and show that example too

// the 'break' will terminate the block and exit the switch statement
// let fruit = 'apple';

// switch (fruit) {
//     case 'apple':
//         console.log('This is an apple.');
//         break;
//     case 'banana':
//         console.log('This is a banana.');
//         break;
//     case 'cherry':
//         console.log('This is a cherry.');
//         break;
//     default:
//         console.log('Unknown fruit.');
//         break;
// }




// We can have intential fall-through
// example, to group multiple cases that should result in the same outcome
// let fruit = 'banana';

// switch (fruit) {
//     case 'apple':
//     case 'banana':
//     case 'cherry':
//         console.log('This is a fruit.');
//         break;
//     default:
//         console.log('Unknown item.');
// }

// all three examples fall through to the same block of code