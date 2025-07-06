// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sonu Kumar";
tinderUser.isLoggedIn = true;

//console.log(tinderUser); // Output: {}

const regularUser = {
    email: "sonukr@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sonu",
            lastname: "Kumar"
        }
        
    }

}

// console.log(regularUser.fullname.userfullname.firstname); // Accessing nested object properties

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};


const obj3 = {...obj1, ...obj2, ...obj4}; // Merging two objects using spread operator

// const obj3 = Object.assign({}, obj1, obj2, obj4); // Merging two objects using Object.assign
//Object.assign creates a new object by copying properties from one or more source objects to a target object.

// console.log(obj3); // Output: {1: "a", 2: "b", 3: "c", 4: "d"}


const users = [
    {
         id: 1,
         name: "Sonu Kumar",
         email: "sonukr@gmail.com",
         isLoggedIn: false,
    },
    {
         id: 1,
         name: "Sonu Kumar",
         email: "sonukr@gmail.com",
         isLoggedIn: false,
    },
    {
         id: 1,
         name: "Sonu Kumar",
         email: "sonukr@gmail.com",
         isLoggedIn: false,
    },
]

users [1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Output: Array of keys in the object
// console.log(Object.values(tinderUser)); // Output: Array of values in the object

// console.log(Object.entries(tinderUser)); // Output: Array of key-value pairs in the object

// console.log(Object.hasOwn(tinderUser, "id")); // Output: true if the object has the property "id", false otherwise


const course = {
     courseName: "JavaScript Basics",
     price: "999",
        courseAuthor: "Sonu Kumar",
}

const {courseAuthor: author} = course; // Destructuring assignment to extract courseAuthor from the course object

// console.log(courseAuthor); // Output: "Sonu Kumar"

console.log(author); // Output: "Sonu Kumar"




