// Get DOM Elements
const addUserBtnS = document.getElementById('add-user');
const doubleWealthBtn = document.getElementById('double-Wealth');
const filterWealthBtn = document.getElementById('filter-wealth');
const sortBtn = document.getElementById('sort-wealth');
const sumWealthBtn = document.getElementById('sum-wealth');
const main = document.getElementById('main');

// This is the array to store data
let userArray = [];

// Function to fetch a random user and assign random wealth
async function generateRandomUser() {
    // use fetch to get  random user data from random user id
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    // Save user Data
    const user = data.results[0];
    // Create new user object 
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}` ,
        wealth: Math.floor(Math.random() * 1000000)
    };
    console.log(newUser);
}

// Generate some users on initial page load
generateRandomUser();
