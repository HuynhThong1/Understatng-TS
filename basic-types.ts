
// Object in TS 
// const person: {
//     name: string;
//     age: number
// } = {
//     name: 'Thong',
//     age: 30,
// };

// const person: {
//     name: string,
//     age: number;
//     hobbies: string[],
//     role: [number, string];
// } = {
//     name: 'Thong',
//     age: 30,
//     hobbies: ['Sport', 'Gaming'],
//     role: [2, 'author']
// };

// const person: {
//     name: string,
//     age: number;
//     hobbies: string[],
//     role: [number, string];
// } = {
//     name: 'Thong',
//     age: 30,
//     hobbies: ['Sport', 'Gaming'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Thong',
    age: 30,
    hobbies: ['Sport', 'Gaming'],
    role: Role.ADMIN
};


// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}

if (person.role === Role.ADMIN) {
    console.log('is admin')
}