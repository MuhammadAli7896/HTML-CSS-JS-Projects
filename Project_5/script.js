// Get DOM Elements
const addUserBtn = document.getElementById('add-user');
const doubleWealthBtn = document.getElementById('double-wealth');
const filterWealthBtn = document.getElementById('filter-wealth');
const sortWealthBtn = document.getElementById('sort-wealth');
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
    // add new user object to user array
    addUserData(newUser);
};

// function to add new user to the user Array
function addUserData(user) {
    // Push user object to the user Array
    userArray.push(user);
    // Update the Dom with new data in userArray
    updateDOM();
};

// Function to update Dom with new user data from useArray
function updateDOM(userData = userArray) {
    // wipe away content from main element
    main.innerHTML = '<h2><strong>User</strong> Wealth</h2>'
    // Loop over user Data array and display users 
    userData.forEach( user => {
        // Create a anew div element
        const divElement = document.createElement('div');
        // Assign class to the new div
        divElement.classList.add('user');
        // Add content to the new div element
        divElement.innerHTML = `<strong>${user.name}</strong> $${formatWealth(user.wealth)}`;
        // Display the new div element in the DOM
        main.appendChild(divElement);
    })
};

// Function wealth number as dollar
function formatWealth(wealth) {
    return wealth.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

};

// Function to double wealth of all users
function doubleWealth() {
    // User map method to create a new array with double wealth for each user
    userArray = userArray.map( user => {
        return { ...user, wealth: user.wealth * 2 }
    });
    // Update the DOM after wealth is doubled
    updateDOM();
};

// Function to filter and display only user of wealth greater than million
function filterWealth() {
    userArray = userArray.filter( user => user.wealth > 1000000);
    updateDOM();
};

// Function to sort uers by wealth 
function sortUsers() {
    userArray.sort( (a, b) => b.wealth - a.wealth );
    updateDOM();
};

// Function to calculate net wealth or sum all the wealth of users
function calculateNetWealth() {
    const netWealth = userArray.reduce( (acc, user) => 
        (acc += user.wealth), 0
    );
    // create a new div element 
    const totalWealthDiv = document.createElement('div');
    totalWealthDiv.innerHTML =  `<h3>Net Wealth: <strong>$${formatWealth(netWealth)}</strong></h3>`;
    main.appendChild(totalWealthDiv);
}; 

// Event Listeners
// 1. Listen for click on Add User Button
addUserBtn.addEventListener('click', generateRandomUser);

// 2. Listen for click on the Double Wealth Button
doubleWealthBtn.addEventListener('click', doubleWealth);

// 3. Listen for click on the Show Millionaires Button
filterWealthBtn.addEventListener('click', filterWealth);

// 4. Listen for click on the Sort Users Button
sortWealthBtn.addEventListener('click', sortUsers);

// 5. Listen for click on the Calculate Net Wealth Button
sumWealthBtn.addEventListener('click', calculateNetWealth);

// Generate some users on initial page load
generateRandomUser();
generateRandomUser();
generateRandomUser();