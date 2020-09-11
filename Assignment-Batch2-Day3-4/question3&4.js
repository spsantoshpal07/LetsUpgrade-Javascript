console.log('---------------------Question 3--------------------------');
// Question 3:  Create an array of objects with objects haing th efollowing properties
//             A. {name(String), age(number), country(string), hobbies array (String [])}
//             B. Write function to display all the objects on the console.

const arr = [
    {
        name: 'Eddy',
        age: 23,
        country: 'USA',
        hobbies: ['basketball', 'baseball', 'dance']
    },
    {
        name: 'Jenny',
        age: 21,
        country: 'India',
        hobbies: ['basketball', 'football', 'dance', 'singing']
    },
    {
        name: 'Niti',
        age: 20,
        country: 'India',
        hobbies: ['cricket', 'dance', 'listening songs']
    },
    {
        name: 'Rohit',
        age: 35,
        country: 'India',
        hobbies: ['cricket', 'dance', 'basketball', 'running']
    },
    {
        name: 'Sally',
        age: 29,
        country: 'Indonesia',
        hobbies: ['coding', 'learning', 'dance']
    }
];

const display = () => {
    console.log('List of all the users: ');
    arr.forEach(user => console.log(user));
}

display();


console.log('---------------------Question 4--------------------------');
// Question 4: Following the 3rd question 
//             A. Write a function to display all the objects having age less than 30
//             B. Write a function to display all the objects having country India

const age30 = () => {
    const list = arr.filter(user => user.age<30);
    console.log('List of all the users having age less than 30:',list);
}

age30();

const country = () => {
    const countryList = arr.filter(user => user.country === 'India');
    console.log('List of all the users having country India:',countryList);
}

country();


