// Imagine a system where we need to determine a user's access based on several criteria
// The user must be logged in
// The user must have a role of either 'admin' or 'editor'
// If the user's role is 'editor' they must also have approval from an admin

// We have multiple conditions and logical operators, making this a situation better handled with if/else
// This uses the OR operator and nested conditions


const isLoggedIn = true;
const userRole = 'editor';
const isApprovedByAdmin = false;

if (isLoggedIn && (userRole === 'admin' || (userRole === 'editor' && isApprovedByAdmin))) {
    console.log('Access granted');
} else {
    console.log('Access denied');
}


// Switch statements are designed to compare a single expression against multiple values; setting up this same situation in a switch statement would be more cumbersome. We'd have to use a 'true' switch and put the conditions inside the cases - this might make it less readable and less intuitive.

const userStatus = {
    isLoggedIn: true,
    role: 'editor',
    isApprovedByAdmin: false
};

switch (true) {
    case userStatus.isLoggedIn && userStatus.role === 'admin':
        console.log('Access granted');
        break;
    case userStatus.isLoggedIn && userStatus.role === 'editor' && userStatus.isApprovedByAdmin:
        console.log('Access granted');
        break;
    default:
        console.log('Access denied');
}